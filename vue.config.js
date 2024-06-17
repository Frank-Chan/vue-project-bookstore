const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  //定义 Vue CLI 的配置选项。
  transpileDependencies: true, //是否对依赖包进行编译
  devServer: {
    proxy: {
      api: {
        //这里的地址是后端数据接口的地址
        target: "http://111.229.37.167/",
        changeOrigin: true, //允许跨域
      },
    },
  },
});
