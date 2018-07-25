var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'src/js/');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR + '/public',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [BUILD_DIR + '/node_modules/babel-preset-es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ]
  }
};

module.exports = config;
