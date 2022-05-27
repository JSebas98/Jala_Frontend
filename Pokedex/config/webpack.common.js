
module.exports = {
    entry: {
        app: './src/js/main.js',
        component: './src/js/pokemon-card.js',
        utils: './src/js/utils.js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            }
        ],
    },
}