const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { SERVER_HOST, SERVER_PORT } = require('./constant.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: true,
    host: SERVER_HOST,
    port: SERVER_PORT,
    // open: true,
    static: {
      directory: path.resolve(__dirname, '..', 'dist'),
    },
    hot: true,
    // overlay: true, // 错误时在浏览器上全屏覆盖
  },
  optimization: {
    minimize: false,
    minimizer: [],
  },
  optimization:{
    usedExports: true, // 未被使用的exports不会被导出到bundle中，开发模式使用treesharking
    emitOnErrors:true,
    runtimeChunk: 'single',
  },
});