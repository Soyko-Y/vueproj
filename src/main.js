import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { applyPolyfills, defineCustomElements } from "hello-world/loader";

const app = createApp(App);
app.use(router);
app.use(store);
// app.mount("#app");

applyPolyfills().then(() => {
  defineCustomElements().then(() => {
    app.mount("#app");
  });
});
