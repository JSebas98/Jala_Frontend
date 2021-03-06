const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, '../build'),
        assetModuleFilename: 'imgs/[name][contenthash][ext]',
    },
    devtool: 'source-map',
});