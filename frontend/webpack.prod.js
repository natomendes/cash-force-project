const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        reactivityTransform: true
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  externals: {
    axios: 'axios'
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://cashforceapi.renatolmendes.com')
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[fullhash].css'
    }),
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public'}
      ]
    })
  ]
})