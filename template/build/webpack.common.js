const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const { VueLoaderPlugin } = require('vue-loader');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// 根目录
const root = path.resolve(__dirname, '..');

/**
 * 以根目录拼接路径
 * @param  {...any} args
 * @return
 */
function rootResolve(...args){
  return path.resolve(root, ...args);
}

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json", ".vue"], // 可省略后缀
    alias: {
      '@': rootResolve('src')
    }
  },
  entry: {
    main: rootResolve('src/main.js')
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: rootResolve('dist'),
    clean: true,
    publicPath: devMode ? '/' : './', // 生产环境上根据不同场景可能改变根路径，如 "./h5/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.less$/i,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // 'style-loader', // 将 CSS 生成 style 标签插入 HTML 中
          {
            loader: MiniCssExtractPlugin.loader, //抽离css的loader
            options: {
              publicPath: '../', // css抽离后路径发生变化
            }
          },
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator:{
          filename: 'images/[name].[contenthash][ext]'
        },
        parser:{
          dataUrlCondition: {
            maxSize: 20*1024 // 操过20kb就使用图片资源，小于20kb就使用base64编码
          }
        }
      },
      // 打包字体图标
      {
        test: /\.(eot|svg|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack5', // html 中取值 <title><%= htmlWebpackPlugin.options.title %></title>
      template: rootResolve("public/index.html"), // 指定html模板文件
      inject: 'body',
      // hash: true, // 在引入JS时增加hash后缀字符串，去除缓存 bundle.js?a251...2ce5 
      filename: 'index.html',
      chunks: ['main'], //配置html需要引入的chunk,index 是 entry中的key
      minify: {
        removeComments: true, // 移除注释
        removeAttributeQuotes: true, // 移除属性中的双引号
        collapseWhitespace: true, // 去除空格与换行
      }
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'style/[name].css' : 'style/[name].[contenthash].css',
      // ignoreOrder: false, //启用关闭 警告⚠️
      // chunkFilename: `style/[name].[chunkhash:8].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: rootResolve('public'),
          to: rootResolve('dist'),
          globOptions: {
            ignore: ['**/*.html'] // 忽略不需要复制的文件
          }
        },
      ],
    }),
    // 设定环境变量
    new webpack.DefinePlugin({
      "PUBLIC_PATH": JSON.stringify("./"),
      "process.env": JSON.stringify({ // 传递的值必须字符串化
        ...process.env,
        "SHOW_CONFIG_HEADER": "TRUE"
      })
    }),
    new VueLoaderPlugin(),
    // 编译进度提示
    new ProgressBarPlugin({
      format: `:msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
      clear: false
    }),
  ],
  optimization: {
    // usedExports: true, // 开发模式使用treesharking
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false, // 不创建许可证文件和注释 vendors.js.LICENSE.txt
        terserOptions: {
          format: {
            comments: false, // 删除js中的注释
          },
        }
      })
    ],
    // runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
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
  // 外部扩展引入，防止单个文件体积过大，影响首屏渲染
  externals: {
    "vue": 'Vue',
    "vuex": "Vuex",
    "element-ui": 'ELEMENT',
    "mint-ui": 'MINT',
    "axios": 'axios',
  },
};