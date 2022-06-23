const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: { main: path.resolve(__dirname, './client/index.js') },
	output: {
    filename: 'bundle.js',
		path: path.resolve(__dirname, './build')
	},
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
              },
            },
            {
              test: /.(css|scss)$/,
              use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
            },
            {
              test: /\.(png|jp(e*)g|svg|gif)$/,
              use: ['file-loader'],
            },
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
          ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true,
        proxy: {
            '*': { target: 'http://localhost:3000' },
            '/api': { target: 'http://localhost:3000' }, 
        }
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};