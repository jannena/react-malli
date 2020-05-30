const path = require("path");
const webpack = require("webpack");

const config = {
    entry: ["@babel/polyfill", "./client/index.js"],
    output: {
        path: path.resolve(__dirname, "server/build"),
        filename: "main.js",
        publicPath: "/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "server/build"),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        https: false
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            }
        ]
    }
};

/* const config = (env, argv) => {
    return config;
}; */

module.exports = config;