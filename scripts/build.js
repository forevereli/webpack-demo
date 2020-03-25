/**
 * @author cici
 * @date 2019-05-15
 * @Description:
 */
/* eslint-disable */
const webpack = require('webpack');

const webpackConfig = require('../config/webpack.prod.config');

webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
    }));
});

