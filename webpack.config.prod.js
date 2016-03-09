var webpack = require('webpack');
var path = require("path");
var version = require('./package.json').version;

module.exports = {
    entry: {
			main: "./src/main.js",
    },
    output: {
				path: path.join(__dirname, "dist"),
        filename: "sofe-inspector-" + version + ".js",
        libraryTarget: "commonjs2",
        library: "boot"
    },
		module: {
			loaders: [
				{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
				{ test: /\.css$/, loaders: [
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'postcss-loader'
				]}
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
