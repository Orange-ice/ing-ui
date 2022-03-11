// https://webpack.docschina.org/guides/dependency-management/#context-module-api
// https://zhuanlan.zhihu.com/p/88325577

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}

// 此处的 try catch 为避免测试时报错
try {
  importAll(require.context('./icons', true, /\.svg$/));
} catch (err) {
}

// npm i @types/webpack-env @types/node -D 来处理ts报错
