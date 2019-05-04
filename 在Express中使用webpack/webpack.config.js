const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry:{
    app: './src/index.js',
    print: './src/print.js'
  },  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 4000,
    inline: true    
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Output Management'        
    }),    
    new UglifyJSPlugin({
        sourceMap: true
    })
  ],  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',   // 生成的index.html里的文件引用地址该为相对路径，而不是绝对路径
  },
  module: {
    rules: [
        {
          test: /(\.jsx|\.js)$/,
          use: {
              loader: "babel-loader"
          },
          exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
        }
    ]
  },
  mode: "production"
};