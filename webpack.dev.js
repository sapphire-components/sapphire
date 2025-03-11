const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'dev.[name].js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'dev.[name].css',
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, 'dist'),
		server: {
			//type: 'https',
			type: 'http',
		},
		devMiddleware: {
			writeToDisk: true,
		},
		allowedHosts: 'all',
		hot: false,
		liveReload: false,
		port: 3000,
		host: 'localhost',
	},
});
