const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html",
        }),
    ],
};