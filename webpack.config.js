var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  entry:  __dirname + '/src/app.js',
  output:{
    path: __dirname + '/src/build', //输出位置
    filename:'banma-[name]-[chunkhash].js' //输入文件
  },
  module: {
    loaders: [
      {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.ejs'
    })
  ]
};