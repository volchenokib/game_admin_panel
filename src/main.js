import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BButton } from "bootstrap-vue";

// Note: order is important
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.component("b-button", BButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
