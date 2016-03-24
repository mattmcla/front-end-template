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
