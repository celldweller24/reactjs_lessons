const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        //publicPath: '/',
        filename: 'bundle.js'
    },

    context: path.resolve(__dirname, './'),
    devtool: NODE_ENV == 'development' ? 'module-source-map' : false,
    watch: NODE_ENV == 'development',
    mode: 'none',

    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactJS lessons',
            template: 'public/index.html'
        }),
        new webpack.DefinePlugin({ 
            NODE_ENV: JSON.stringify(NODE_ENV) 
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    
    optimization: {
        minimizer: NODE_ENV == 'production' ? [new UglifyJsPlugin({
            parallel: true,
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {
                    inline: true
                },
                mangle: true, // Note `mangle.properties` is `false` by default.
                toplevel: true,
                keep_fnames: true,
            },
            sourceMap: true
        })] : false
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        },
                    }
                ]
            }
        ]
    },
};