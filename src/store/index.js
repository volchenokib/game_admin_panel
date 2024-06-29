import Vue from "vue";
import Vuex from "vuex";
// import http from "@/service/http";
import VuexORM from "@vuex-orm/core";
import Game from "./models/game";

const database = new VuexORM.Database();
database.register(Game);

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {
  //   async fetchData() {
  //     try {
  //       await http().get("/posts");
  //     } catch (e) {
  //       console.log("e", e);
  //     }
  //   },
  // },
  // modules: {},
  plugins: [VuexORM.install(database)],
});
