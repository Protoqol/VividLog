var path                     = require('path');
var CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
	mode: 'production',
	entry: './lib/vividLog.js',
	devtool: 'source-map',
	output: {
		filename: 'vividLog.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new CircularDependencyPlugin({
			exclude: /a\.js|node_modules/,
			failOnError: true,
			allowAsyncCycles: false,
			cwd: process.cwd()
		})
	]
};