//const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        filename: "build.js",
        path: path.join(__dirname, "/dist"),
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        ],
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        // new CopyWebpackPlugin({
        //     patterns: ['index.html']
        // }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.html"),
          }),
        new webpack.HotModuleReplacementPlugin()
    ]
};