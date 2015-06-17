import {join} from 'path';
import webpack from 'webpack';

var plugins = [
  new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

module.exports = {
  entry:  [
    './src/index.js'
  ],
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  externals: {
    jquery: 'window.jQuery'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: plugins
};
