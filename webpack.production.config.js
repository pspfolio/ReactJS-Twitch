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
    path: __dirname,
    publicPath: '/ReactJS-Twitch/prod/',
    filename: 'bundle.js'
  }
};

/*
http://pspfolio.github.io/ReactJS-Twitch/prod/12beade9232e689a16bc544b06282221.png
 http://pspfolio.github.io/ReactJS-Twitch/prod/ReactJS-Twitch/prod/12beade9232e689a16bc544b06282221.png
*/
