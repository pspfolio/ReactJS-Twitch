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
},
{
    test   : /\.png$/,
    loader: "file-loader"
},
]
},
resolve: {
  extensions: ['', '.js', '.jsx']
},
  output: {
    path: __dirname + '/prod',
    publicPath: '/prod/',
    filename: 'bundle.js'
  }
};
