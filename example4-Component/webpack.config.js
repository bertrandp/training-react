const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

let resolve = {
    extensions: ['.js','.jsx'],
    alias: {}};

const plugins = [
    new TransferWebpackPlugin([
        { from: 'app/root' }
    ]),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity
    })
];      

const rules = [
    {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: {
            loader: 'eslint-loader',
            options: {
                failOnWarning: true,
                failOnError: true
            }
        }
    },
    {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015','react']
            }
        }
    }
];

if (NODE_ENV === 'production') {
    // Do some cool stuff like uglify, minify...
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(NODE_ENV)
        }
    }));

    Object.assign(resolve.alias, {
        lodash: 'lodash/lodash.min.js'
    });

    rules.unshift({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['uglify-loader']
    });
}

module.exports = {
    entry: {
        app: ['./app/js/main.js'],
        vendor: ['lodash','react','react-dom']
    },
    resolve: resolve,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: rules
    },
    plugins: plugins
};