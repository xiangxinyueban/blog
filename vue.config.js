const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port: 8888,
    host: '127.0.0.1',
    open: true,
    proxy:{
      "/api": {
        // target: "	http://127.0.0.1:4523/m1/1065593-0-default/",
        // target: "http://121.196.103.30:5000/",
        target: "http://127.0.0.1:8080/",
        changeOrigin: true,
        ws:true,
        secure:false,
        pathRewrite:{
          "^/api": ""
        }
      }
    }  
  }
})
