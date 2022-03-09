const baseConfig = require('./webpack.config')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'ing-ui',
      template: 'public/index.html'
    })
  ]
})
