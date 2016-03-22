module.exports = {
    context: __dirname + '/src',
    entry: './script/main',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
}
