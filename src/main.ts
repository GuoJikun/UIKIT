import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MyKit from "../packages";
import Preview from "./components/Preview.vue";

createApp(App)
  .component("Preview", Preview)
  .use(router)
  .use(MyKit)
  .mount("#app");
