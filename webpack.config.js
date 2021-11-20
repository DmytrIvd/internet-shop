const path = require('path');

module.exports = {

    mode: 'development',
    entry: { main: './src/index.js', bascet: './src/bascet.js', addItem: './src/addItem.js' },
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000
    }
};