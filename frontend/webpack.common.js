const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'main-bundle-[fullhash].js'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}