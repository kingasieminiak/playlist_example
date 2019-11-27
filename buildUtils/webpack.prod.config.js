const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './.prod.env',
      safe: true,
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
          dead_code: true,
          conditionals: true,
          booleans: true
        },
        module: false,
        output: {
          comments: false,
          beautify: false,
        }
      }
    })
  ],
  },
};

module.exports = config;
