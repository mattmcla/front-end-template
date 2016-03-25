const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: __dirname + '/src',
    entry: './script/main.jsx',
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
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
			}),
      new ExtractTextPlugin('main.css', {
        allChunks: true
      })
		],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          // .babelrc in use
        },
        {
          test: /\.scss$/,
          loaders: [
            'style',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            //'resolve-url',
            'sass'
          ]
        }
      ]
    },
    sassLoader: {
      includePaths: [path.resolve(__dirname, './node_modules')]
    }
}
