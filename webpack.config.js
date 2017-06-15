/* eslint-disable */

var path = require('path');

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    extensions: ['.js', '.jsx']
  }
}
