/**
 * Created by yfw on 2016/12/7.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        __dirname + '/src/js/main.js'
    ],
    output: {
        filename: 'build.js',
        path: __dirname + '/build/js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Love in My Heart',
            filename: __dirname + '/build/html/main.html',
            template: __dirname + '/src/tpl/main.html',
            hash: true
        })
    ]
};