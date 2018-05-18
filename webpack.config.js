const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/public'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                options: {
                    babelrc: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'tictacturing',
            filename: './index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
