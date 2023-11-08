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
    extensions: [".js", ".jsx", ".json", ".vue", ".ts", ".tsx"], // 可省略后缀
    alias: {
      '@': rootResolve('src')
    }
  },
  entry: {
    main: rootResolve('src/main.ts')
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: rootResolve('dist'),
    clean: true,
    publicPath: devMode ? '/' : './'
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use:{
          loader: "ts-loader", // tsc 编译
          options: {
            // configFile: rootResolve('tsconfig.other.json'), // 指定别的ts配置，为了区分脚本的ts配置
            appendTsSuffixTo: [/\.vue$/], // 对应文件添加.ts或.tsx后缀 app.vue.ts
            // transpileOnly: true, // 关闭ts-loader的类型检查，即只进行转译 npm i fork-ts-checker-webpack-plugin --save-dev new ForkTsCheckerWebpackPlugin()
          },
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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
          filename:'image/[name].[contenthash][ext]'
        },
        parser:{
          dataUrlCondition: {
            maxSize: 20*1024 // 操过20kb就使用图片资源，小于20kb就使用base64编码
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: rootResolve("public/index.html"), // 指定html模板文件
      inject: 'body',
      // hash: true, // 在引入JS时增加hash后缀字符串,去除缓存 bundle.js?a251...2ce5 
      filename: 'index.html',
      chunks: ['main'], //配置html需要引入的chunk,index 是 entry中的key
      minify: {
        removeComments: true, // 移除注释
        // removeAttributeQuotes: true, // 移除属性中的双引号
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
    new webpack.DefinePlugin({
      BASE_URL: '1111',
      // 'process.env': {
      //   NODE_ENV: JSON.stringify('production')
      // }
    }),
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: `:msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
      clear: false
    }),
  ],
};