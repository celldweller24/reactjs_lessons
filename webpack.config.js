var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    context: path.resolve(__dirname, './'),
    devtool: 'none',
    output: {
        path: path.resolve(__dirname, './build'),
        //publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactJS lessons',
            template: 'public/index.html'
        })
    ],
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
};