const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: {
    ingui: './components/index.tsx'
  },
  module: {
    rules: [
      ...baseConfig.module.rules.filter(item => item.loader !== 'ts-loader'),
      // 取消类型检查的禁用，因为打包没有类型声明文件
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
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
  }
})
