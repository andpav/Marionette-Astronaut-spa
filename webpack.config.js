var webpack = require('webpack');
var entry = './src/main.js',
    output = {
        path: __dirname,
        filename: 'app.js'
    },
    uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compressor: {
            screw_ie8: true,
            warnings: false
        },
        output: {
            comments: false
        }
    });

module.exports = {
    debug : true,
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }}
        ]
    }
};

module.exports.production = {
    debug: false,
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        uglifyJsPlugin
    ]
};