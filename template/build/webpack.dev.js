const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    host: '0.0.0.0', // 【127.0.0.1 不能使用本机IP】【10.15.45.112 不能使用localhost】【0.0.0.0 两者皆可localhsot，10.15.45.112】
    port: 8080,
    // open: true,
    static: {
      directory: path.resolve(__dirname, '..', 'dist'),
    },
    hot: true,
    // overlay: true, // 错误时在浏览器上全屏覆盖
  },
});