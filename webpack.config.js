'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './public/js/main.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
        publicPath: '/public/js/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
