const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

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
    new Dotenv({
      path: './.env',
      safe: true,
    })
  ],
};

module.exports = config;
