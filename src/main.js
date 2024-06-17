import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App); //创建了Vue应用的实例
app.use(router); //将Vue Router实例注册到Vue应用中
app.mount("#app");
