const webpackMerge = require('webpack-merge');
const commonConfig = require('./buildUtils/webpack.common.config');

module.exports = (env) => {
  const envConfig = require(`./buildUtils/webpack.${env.env}.config.js`);

  return webpackMerge(commonConfig, envConfig);
};
