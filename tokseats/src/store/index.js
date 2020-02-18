import Vue from "vue";
import Vuex from "vuex";
import { db, fb } from "../db.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    menu: []
  },
  mutations: {
    loadMenu(state) {
      let prepMenu = [];
      db.collection("menu")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            prepMenu.push(doc.data());
          });
        });
      state.menu = prepMenu;
    },
    loadUser(state) {
      state.user = fb.auth().currentUser;
    },
    resetUser(state) {
      state.user = {};
    }
  },
  actions: {
    loadMenuAction(context) {
      context.commit("loadMenu");
    },
    loadUserAction(context) {
      context.commit("loadUser");
    },
    resetUserAction(context) {
      context.commit("resetUser");
    }
  },
  getters: {
    meals(state) {
      return state.menu.filter(item => item.category === "meal");
    },
    singles(state) {
      return state.menu.filter(item => item.category === "single");
    },
    sides(state) {
      return state.menu.filter(item => item.category === "side");
    },
    drinks(state) {
      return state.menu.filter(item => item.category === "drink");
    }
  },
  modules: {}
});
