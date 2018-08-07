/* eslint-disable */

module.exports = {
  entry: ['babel-polyfill', './index.web.js'],
  output: {
    filename: 'web/js/bundle.js',
    sourceMapFilename: 'web/js/bundle.map',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
  },
};
