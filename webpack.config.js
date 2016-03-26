'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
        new HtmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.css?$/,
                loaders: ['style', 'raw'],
                include: __dirname
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url',
                query: { limit: 10240 }
            }
        ]
    }
};
