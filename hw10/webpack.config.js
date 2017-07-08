'use strict';


const
    NODE_ENV = process.env.NODE_ENV || 'development',
    path = require('path'),
    webpack = require('webpack');


module.exports = {
    entry: './app/js/app.js',

    output: {
        path: path.resolve(__dirname, './app/js/build'),
        filename: 'bundle.js'
    },

    watch: NODE_ENV === 'development',

    watchOptions: {
      aggregateTimeout: 100
    },

    devtool: NODE_ENV === 'development' ? 'source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    module: {
        rules: [
            {
                include: path.resolve(__dirname, './app/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};