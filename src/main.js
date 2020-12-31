import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { applyPolyfills, defineCustomElements } from "hello-world/loader";

// createApp(App)
//   .use(router)
//   .mount("#app");
const app = createApp(App)
  .use(router);

applyPolyfills().then(() => {
  defineCustomElements().then(() => {
    app.mount("#app");
  });
});