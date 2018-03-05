var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const sourcePath = path.join(__dirname, './');
const sourcePathNode_Module = path.join(__dirname, './node_modules');
const sourcePathPublic = path.join(__dirname, './public/src');

const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router', 'react-router-dom', 'axios',
    'react-redux', 'redux', 'redux-form', 'redux-promise', 'lodash'
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.(png|gif|jpg|jpeg|woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader?limit=40000'
            }
        ]
    },
    devServer: { 
        contentBase: './',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        historyApiFallback: true 
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
