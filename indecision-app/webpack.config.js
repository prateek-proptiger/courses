const path = require('path');
const pubFolder = path.join(__dirname, 'public'); 

module.exports = {
    entry: './src/app.js',
    output: {
        path: pubFolder,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
            // How to specify which presets to use ? => .babelrc
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map', // Fast debugging
    "devServer": {
		"contentBase": pubFolder
	}
}