const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //   configureWebpack: {
  //     devServer: {
  //         headers: { "Access-Control-Allow-Origin": "*" }
  //     }
  // },
  devServer: {
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    proxy: {
      "^/api": {
        target: "http://backend:8088",
        changeOrigin: true,
        ws: true,
        pathRewrite: {                  //路径重置
          '^/api': ''
        }
      }
    }
  }
})
