/**
 * @author cici
 * @date 2019-05-15
 * @Description:
 */
/* eslint-disable */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const portfinder = require('portfinder');

/* webpack配置项 */
const webpackConfig = require('../config/webpack.dev.config');


const HOST = process.env.HOST || '0.0.0.0';
portfinder.basePort = 3000;

/* 创建一个webpack compile实例 */
const compiler = webpack(webpackConfig);

const serverConfig = {
    /* 启动服务之后可以访问public下的静态页面 */
    contentBase: 'public',
    open: false,
    inline: true,
    openPage: '/',
    compress: true,
    hot: true,

    // 启动时和每次保存之后，那些显示的 webpack 包(bundle)信息将被隐藏
    // 错误和警告仍然会显示
    noInfo: true,
    quiet: true,
    historyApiFallback: true,
};

portfinder.getPortPromise().then(port => {
    const devServer = new WebpackDevServer(compiler, serverConfig);
    devServer.listen(port, HOST, err => {
        if (err) return console.log(err);
        console.log(chalk.cyan('启动服务...\n'));
        console.log(chalk.green(`Your application is running here: http://localhost:${port}`));
    });
}).catch(err => {
    console.log(err);
});

