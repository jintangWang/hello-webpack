const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },
  devtool: 'inline-source-map', // 可以定位错误到具体的源文件
  devServer: { // webpack-dev-server live-reload功能
    contentBase: './dist',
    hot: true // 模块热更新
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 每次清理dist文件夹
    new HtmlWebpackPlugin({ // 每次重新在dist下生成index.html
      title: '起步'
    }),
    new webpack.NamedModulesPlugin(), // 以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin() // 模块热更新
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|styl)$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};