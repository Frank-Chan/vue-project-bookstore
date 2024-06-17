import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = '/api';    //对应vue.config.js中配置的proxy-api-target地址

const app = createApp(App); //创建了Vue应用的实例
app.use(router); //将Vue Router实例注册到Vue应用中
app.use(store); //将Vuex Store实例注册到Vue应用中
app.use(VueAxios, axios); //将Vue Axios插件注册到Vue应用中后，可以在应用的组件中通过this.$http来访问Axios实例，发送HTTP请求并处理响应
app.mount("#app");
