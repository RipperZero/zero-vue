import { createApp } from "vue";
import Antd from "ant-design-vue";
// polyfill for(lvh svh dvh)
// @see https://github.com/joppuyo/large-small-dynamic-viewport-units-polyfill
import "large-small-dynamic-viewport-units-polyfill";

import App from "./App.vue";
import { router } from "./router";

import "ant-design-vue/dist/reset.css";
import "./assets/main.css";

const app = createApp(App);

app.use(Antd);
app.use(router);

app.config.errorHandler = (err) => {
  console.log(err);
};

app.mount("#app");
