/* eslint-env node */
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		filename: 'sofe-inspector.js',
		libraryTarget: 'amd',
		path: __dirname + '/dist',
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, './node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: [path.resolve(__dirname, './node_modules')],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]',
						},
					},
				],
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, './node_modules')],
				use: ['style-loader', 'css-loader'],
			},
			{ test: /\.(png|jpg)$/, loader: 'file-loader' }
		],
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		// new BundleAnalyzerPlugin({analyzerPort: 9091}),
	],
	devtool: 'source-map',
	externals: [
		/^sofe$/,
	],
};
