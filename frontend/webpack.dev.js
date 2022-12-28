const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        reactivityTransform: true
      }
    }, {
      test: /\.scss/,
      use: [{
        loader: 'style-loader'
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
  devServer: {
    static: './public',
    devMiddleware: {
      writeToDisk: true
    },
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:5050'),
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false,
    }),
    new VueLoaderPlugin()
  ]
})
