var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./app/js/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: []
    },
    plugins: [
        new TransferWebpackPlugin([
            {from: 'app/root'}
        ])
    ]
};