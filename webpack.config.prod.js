var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
			main: "./src/main.js",
    },
    output: {
				path: path.join(__dirname, "dist"),
        filename: "sofe-inspector.js"
    },
		module: {
			loaders: [
				{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
			]
		},
		devtool: 'sourcemap',
		plugins: [
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify('production')
				}
			})
		]
}
