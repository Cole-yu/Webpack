const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const devMode = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
   mode: 'production',
   devtool: false,
  //  devtool: 'inline-source-map',
   optimization: {
      // usedExports: true, // 开发模式使用treesharking
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          extractComments: false, // 去除所有注释
          terserOptions: {
            compress: { pure_funcs: ['console.log'] }, // 去除所有console.log函数
          },
        })
      ],
      // runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/, // // 只匹配node_modules里面的模块
            name: 'vendors', // 提取文件命名为vendors,js后缀和chunkhash会自动加
            chunks: 'all',
          },
        },
      },
      moduleIds: 'deterministic',
   },
   performance: {
      hints: devMode ? false : 'warning',
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 2000000, // 1kb=1024个字节=8比特
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 1000000,
      // 只给出 js/css 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
   },
   cache: {
      type: 'filesystem',
      compression: 'gzip',
   },
});