import Vue from "vue";
import Vuex from "vuex";
import Menu from "./modules/menu";
import User from "./modules/user";
import Cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Cart,
    Menu,
    User
  }
});
