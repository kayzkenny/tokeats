import Vue from "vue";
import Vuex from "vuex";
import Orders from "./modules/orders";
import Menu from "./modules/menu";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Orders,
    Menu
  }
});
