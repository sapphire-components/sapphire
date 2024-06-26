const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const outputPath = path.resolve(__dirname, 'dist');
const isProduction = process.env.NODE_ENV === 'production ';

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/app.js'),
		styleguide: path.resolve(__dirname, './src/styleguide/scripts.js'),
		backoffice: path.resolve(__dirname, './src/backoffice/scripts.js'),
		icons: path.resolve(__dirname, './src/assets/icons.js')
	},
	output: {
		path: outputPath,
		publicPath: '/dist/',
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [`${outputPath}/*.hot-update.*`],
			dangerouslyAllowCleanPatternsOutsideProject: true,
			dry: false,
		}),
		new webpack.BannerPlugin({
			banner: `[base] || Version: ${package.version} || Generated: ${new Date()}`,
		}),
	],
	resolve: {
		fallback: {
			fs: false,
		}
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
			},
			{
				test: /\.s?[ac]ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: {
								filter: (url, resourcePath) => {
									// resourcePath - path to css file

									// Don't handle `server root related` URLs (the paths starting with '/').
									if (url.match(/^\//)) {
										return false;
									}

									return true;
								},
							},
							importLoaders: 2,
							sourceMap: !isProduction,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: !isProduction,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: !isProduction,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
			},
		],
	},
	stats: {
		errorDetails: true,
	},
};