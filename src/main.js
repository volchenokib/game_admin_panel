import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BInputGroup,
} from "bootstrap-vue";

// Note: order is important
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.component("b-button", BButton);
Vue.component("b-form", BForm);
Vue.component("b-form-input", BFormInput);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-input-group", BInputGroup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
