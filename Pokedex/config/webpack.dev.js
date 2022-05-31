const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'imgs/[name][ext]',
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: '../src',
    },
    //watch: true,
});