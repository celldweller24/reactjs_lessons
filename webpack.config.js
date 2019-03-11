module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    },
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