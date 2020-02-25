import Vue from "vue";
import Vuex from "vuex";
import Orders from "./modules/orders";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Orders
  }
});
