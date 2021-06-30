import Vue from "vue";
import Vuex from "vuex";
import http from "@/service/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async fetchData() {
      try {
        await http().get("/posts");
      } catch (e) {
        console.log("e", e);
      }
    },
  },
  modules: {},
});
