const webpack = require('webpack')
module.exports = {
    context: __dirname + '/src',
    entry: './script/main.jsx',
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				}
			})
		],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          // .babelrc in use
        },
      ]
    }
}
