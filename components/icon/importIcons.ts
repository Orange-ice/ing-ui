// https://webpack.docschina.org/guides/dependency-management/#context-module-api
// https://zhuanlan.zhihu.com/p/88325577

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}

importAll(require.context('./icons', true, /\.svg$/));

// npm i @types/webpack-env @types/node -D 来处理ts报错
