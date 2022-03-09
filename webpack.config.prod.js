const baseConfig = require('./webpack.config')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: {
    ingui: './components/index.tsx'
  },
  // 声明这是外部依赖，不参与打包
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
})
