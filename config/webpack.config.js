/**
 * @author cici
 * @date 2019-07-17
 * @Description:
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');

module.exports = (webpackEnv) => {
    // 当前环境
    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';

    const getStyleLoaders = (cssOptions, preProcessor) => {

        const loaders = [
            isEnvDevelopment && require.resolve('style-loader'),

            isEnvProduction && {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                // Options for PostCSS as we reference these options twice
                // Adds vendor prefixing based on your specified browser support in
                // package.json
                loader: require.resolve('postcss-loader'),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebook/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                        require.resolve('postcss-flexbugs-fixes'),
                        require.resolve('postcss-preset-env')({
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        }),
                    ],
                    sourceMap: isEnvDevelopment,
                },
            },
        ].filter(Boolean);
        if (preProcessor) {
            if (preProcessor === 'less-loader') { // 为less-loader添加配置项，启动javascript
                loaders.push({
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: isEnvDevelopment,
                        // less3.0以上 解决 Inline JavaScript is not enabled 问题
                        // https://github.com/ant-design/ant-design/issues/7927#issuecomment-372513256
                        javascriptEnabled: true,
                        // 解决 less 中 url(./file.png) 相对路径解析错误问题
                        // https://github.com/less/less.js/pull/3041
                        relativeUrls: false,
                        modifyVars: {
                            'font-size-base': '12px',
                            // 'primary-color': '#06BEB8'
                        },
                    },
                });
            } else {
                loaders.push({
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: isEnvProduction,
                    },
                });
            }
        }
        return loaders;
    };

    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        // 报错时停止编译
        bail: false,
        // 是否生成sourceMap
        devtool: isEnvDevelopment ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
        // 入口文件
        entry: [
            isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),
            // Finally, this is your app's code:
            paths.appIndexJs,
            // We include the app code last so that if there is a runtime error during
            // initialization, it doesn't blow up the WebpackDevServer client, and
            // changing JS code would still trigger a refresh.
        ].filter(Boolean),
        // 输出
        output: {
            // 打包输出build路径
            path: isEnvProduction ? paths.appBuild : undefined,
            // Add /* filename */ comments to generated require()s in the output.
            pathinfo: isEnvDevelopment,
            // There will be one main bundle, and one file per asynchronous chunk.
            // In development, it does not produce real files.
            filename: isEnvProduction
                ? 'static/js/[name].[contenthash:8].js'
                : isEnvDevelopment && 'static/js/bundle.js',
            // TODO: remove this when upgrading to webpack 5
            futureEmitAssets: true,
            // There are also additional JS chunk files if you use code splitting.
            chunkFilename: isEnvProduction
                ? 'static/js/[name].[contenthash:8].chunk.js'
                : isEnvDevelopment && 'static/js/[name].chunk.js',
            // We inferred the "public path" (such as / or /my-project) from homepage.
            // We use "/" in development.
            publicPath,
            // Point sourcemap entries to original disk location (format as URL on Windows)
            devtoolModuleFilenameTemplate: isEnvProduction
                ? info =>
                    path
                        .relative(paths.appSrc, info.absoluteResourcePath)
                        .replace(/\\/g, '/')
                : isEnvDevelopment &&
                (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
        },
    };
};
