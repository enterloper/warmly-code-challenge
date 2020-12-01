
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                  emitWarning: true,
                  failOnError: false,
                  failOnWarning: false
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            },  
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html"
        }),
        new CleanWebpackPlugin() 
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
