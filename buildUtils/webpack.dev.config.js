const webpack = require('webpack');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: '8000',
    inline: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.NODE_URL': JSON.stringify('https://api-stg.jam-community.com/'),
    }),
  ],
};

module.exports = config;
