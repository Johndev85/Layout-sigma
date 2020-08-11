const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        entry: "./src/index.js",
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_mudules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", //para desarrollo
                    "css-loader",
                ],
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 900000,
                    },
                },
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: "src/public/index.html",
            filename: "./index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/styles/styles.css",
                    to: "",
                },
            ],
        }),
    ],
}
