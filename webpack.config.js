const path = require('path');

module.exports = {
    mode: 'development',
    entry: './lib/vividLog.js',
    devtool: 'source-map',
    output: {
        filename: 'vividLog.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
};