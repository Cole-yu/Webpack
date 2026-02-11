const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { SERVER_HOST, SERVER_PORT } = require('./constant.js');
const { rootResolve } = require('./utils.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: true, // 开启 gzips 压缩功能，Content-Encoding: gzip
    host: SERVER_HOST,
    port: SERVER_PORT,
    hot: true,
    // contentBase: rootResolve('src'), // 设置 http://10.15.45.11:8080 访问的本地资源目录为 src 文件夹
    // publicPath: '/a', // 设置访问内存中资源的路径 http://10.15.45.11:8080/a/index.html，output.publicPath='/a/'，环境变量 PUBLIC_PATH='../a/'
    proxy: {
      "/api/indicator": {
        target: "http://10.15.115.104:19019/featureIndexServer", // 58环境
        // target: "https://feature.dzhsj.cn:8410/featureIndexServer", // 生产环境
        pathRewrite: { "^/api/indicator": "" },
      },
      "/wuhan-api/indicator": {
        target: "http://10.15.115.104:6001", // 画图信号，通过网关做透传
        pathRewrite: { "^/wuhan-api/indicator": "" },
      },
    }
  },
  optimization: {
    minimize: false,
    minimizer: [],
  }
})