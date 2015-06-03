'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server'
        , './js/main.js'
    ]
    , resolve: {
        root: __dirname
        , moduleDirectories: [
            'bower_components'
        ]
    }
    , module: {
        loaders: [
            {
                test: /\.js?$/
                , loaders: ['react-hot', 'babel']
                , exclude: /node_modules/
            }
        ]
    }
    , plugins: [
        new webpack.HotModuleReplacementPlugin()
        , new webpack.NoErrorsPlugin()
        , new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ]
    , devtool: 'eval-source-map'
}
