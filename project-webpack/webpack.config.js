const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/webpack/',
		filename: 'main.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}
