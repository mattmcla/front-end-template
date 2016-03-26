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
      new ExtractTextPlugin('app.css', {
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
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
        }
      ]
    },
    sassLoader: {
      includePaths: [path.resolve(__dirname, './node_modules')]
    },
    postcss: function () {
      return [
        require('autoprefixer')({ browsers: ['last 2 versions'] })
      ];
    }
}
