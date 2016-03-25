const path = require('path')

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
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'postcss',
            //'resolve-url',
            'sass?sourceMap&sourceMapContents'
          ]
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
