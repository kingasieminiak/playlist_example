const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.NODE_URL': JSON.stringify('https://api-stg.jam-community.com/'),
    }),
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
