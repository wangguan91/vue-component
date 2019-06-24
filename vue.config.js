// vue.config.js
module.exports = {
  publicPath: '/', // 基本路径 rent/
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  devServer: {  // webpack-dev-server 相关配置
    open: true,
    host: '0.0.0.0',
    port: 8000,
    // proxy: { // 前端跨域代理
    //   "/wx": { // 需要拦截的接口 /wx 为拦截所有带有/wx路径的接口 请求中只用写/wx/getUserInfo 即可代理请求
    //     target: "http://abc.yypaperxxzxweixinxiaochengxvceshi.xyz:7070", // 将拦截的接口替换为当前路径
    //     changeOrigin: true // 前端跨域代理
    //   }
    // }
  },
}