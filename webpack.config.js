const path = require("path");

module.exports = {
    mode   : "production",
    entry  : "./lib/vividLog.ts",
    devtool: "source-map",
    output : {
        filename    : "vividLog.js",
        path        : path.resolve(__dirname, "dist"),
        library     : {
            name: "vividLog",
            type: "umd",
        },
        globalObject: "this",
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
        ],
    },
    plugins: [],
};
