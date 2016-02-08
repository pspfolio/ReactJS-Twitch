var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'react-hot!babel'
  },
  {
    test: /\.scss$/,
    loader: 'style!css!sass'
  }
]
},
resolve: {
  extensions: ['', '.js', '.jsx']
},
  output: {
    path: __dirname + '/prod',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
