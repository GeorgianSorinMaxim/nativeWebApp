/* eslint-disable */

const webpack = require('webpack');

let plugins = [];
plugins.push(new webpack.IgnorePlugin(/react-navigation/));

module.exports = {
  entry: ['babel-polyfill', './index.web.js'],
  output: {
    filename: 'web/js/bundle.js',
    sourceMapFilename: 'web/js/bundle.map'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    hot: false
  },
  plugins: plugins
};
