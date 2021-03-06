const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : 'styles/[name][contenthash].css',
    }),
];

module.exports = {
    entry: {
        app: './src/js/main.js',
        component: './src/js/pokemon-card.js',
        utils: './src/js/utils.js',
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.png$/i,
                type: 'asset',
            },
            {
                test: /\.less$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'],
            }
        ],
    },
    resolve: {
        alias: {
            Styles: path.resolve(__dirname, '../src/styles'),
            Images: path.resolve(__dirname, '../src/imgs'),
            Utils: path.resolve(__dirname, '../src/js'),
        }
    }
}