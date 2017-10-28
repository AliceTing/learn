let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: [name].js
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: cssLoaders({
          sourceMap: true,
          extract: isDev ? false : true
        }),
        postcss: [autoprefixer({
          browsers: ['> 1%', 'last 10 versions']
        })],
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?-autoprefixer', 'postcss-loader', 'sass-loader']
      })
    }, {
      test: /\.(jpg|jpeg|gif|png)$/i,
      loader: 'file-loader?name=[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    //生成html
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 5000,
    hot: true
  }
};

