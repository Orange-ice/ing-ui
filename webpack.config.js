const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/components'),
    library: 'INGUI',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
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
  }
}
