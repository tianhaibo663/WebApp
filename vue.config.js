const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint语法严格检测
  lintOnSave:false,
  // 代理跨域问题
  devServer:{
    proxy:{
      // 如果路径中带有api，则找下面的服务器索要数据
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        // pathRewrite:{'^/api':''},
      },
    },
  },
})
