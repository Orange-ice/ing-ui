const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    ingui: './components/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/components'),
    library: 'INGUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // 禁用类型检查，通过 ForkTsCheckerWebpackPlugin 来进行类型检查
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
}
