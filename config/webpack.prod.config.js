/**
 * Created by cici on 2019/1/28.
 */
/* eslint-disable */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolvePath = (path) => require('path').resolve(__dirname, path);
const rules = [
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        use: [
            {
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    eslintPath: require.resolve('eslint'),
                },
            },
        ],
    },
    {
        test: /\.(css|less)$/,
        exclude: /(node_modules)/,
        use: [
            {
                loader: require.resolve(MiniCssExtractPlugin.loader),
                options: {
                    hmr: process.env.NODE_ENV === 'development',
                },
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
            {
                loader: 'less-loader',
            },
        ],
    },
    {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        exclude: /(node_modules)/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            // 按照开发目录生成目录结构
            name: 'static/[name].[hash:8].[ext]',
        },
    },
];

module.exports = {
    /* 打包模式 可以设置开发环境或者生产环境 */
    mode: 'production',

    /* 入口文件 */
    entry: {
        main: resolvePath('../src/index.js'),
        vendor: ['react', 'react-dom']
    },

    /* 输出文件 */
    output: {
        /* 路径 */
        path: resolvePath('../build'),
        /* 文件名称 */
        filename: 'static/js/[name].[hash:8].js',
    },

    module: {
        rules,
    },
    plugins: [
        /* 打包之前清理原先的打包文件 */
        new CleanWebpackPlugin(),

        /* 打包进度条 */
        new WebpackBar(),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css',
            chunkFilename: 'css/[id].[chunkhash:8].css',
        }),

        /* 打包index.html模板，并且注入打包之后的js文件 */
        new HtmlWebpackPlugin({
            /* 模板文件路径 */
            template: resolvePath('../public/index.html'),
            //
            // /* favicon.ico路径 */
            // favicon: resolvePath('../public/favicon.ico'),

            /* 打包之后输出文件路径 */
            filename: 'index.html',
            public_url: ''
        }),

    ],
    devtool: 'cheap-module-source-map'
};
