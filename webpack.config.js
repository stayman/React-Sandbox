import {join} from 'path';
import webpack from 'webpack';

var plugins = [
  new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

module.exports = {
  entry:  [
    './src/index.jsx'
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?optional[]=runtime&stage=0'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: plugins
};
