const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	devtool: false,
	optimization: {
		minimize: false,
		minimizer: [
			new TerserWebpackPlugin({
				extractComments: false,
				terserOptions: {
					format: {
						comments: false,
					},
				},
			}),
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'prod.[name].css',
			ignoreOrder: true,
		}),
	],
	output: {
		filename: 'prod.[name].js',
		pathinfo: false,
	},
});
