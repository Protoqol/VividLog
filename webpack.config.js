var path = require("path");
var CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
    mode   : "production",
    entry  : "./lib/vividLog.ts",
    devtool: "source-map",
    output : {
        filename: "vividLog.js",
        path    : path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module : {
        rules: [
            {
                test   : /\.ts$/,
                exclude: /node_modules/,
                use    : "ts-loader",
            },
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                use    : "babel-loader",
            },
        ],
    },
    plugins: [],
};
