const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports ={
    mode: "development",
    entry:{
        index: path.resolve(__dirname, "src/index.js"),
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        watchFiles: [path.resolve(__dirname, 'src')],
        open: true,
        hot: true,
    },
    module:{
        rules:[
            //Css
            { test: /\.css$/i, use: ['style-loader', 'css-loader']},
            //Images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg|pdf)$/, 
              type: 'asset/resource', 
            },
            //Js for babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ]
    },
    plugins:[ new HtmlWebpackPlugin({
        title: "Carlos Martinez-Cortes",
        filename: "index.html",
        template: path.resolve(__dirname, "src/temps/index.html"),
        chunks: ['index'],
        inject: true,
        }),
    ],
};