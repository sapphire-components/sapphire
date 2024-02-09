const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'prod.[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					'/src/styleguide/script_dev.js',
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'prod.[name].css',
		}),
	],
});