import { db } from "../../db";

// initial state
const state = {
  menu: []
};

// getters
const getters = {
  meals: state => {
    return state.menu.filter(item => item.category === "meal");
  },
  singles: state => {
    return state.menu.filter(item => item.category === "single");
  },
  sides: state => {
    return state.menu.filter(item => item.category === "side");
  },
  drinks: state => {
    return state.menu.filter(item => item.category === "drink");
  }
};

// actions
const actions = {
  loadMenuAction({ commit }) {
    commit("loadMenu");
  }
};

// mutations
const mutations = {
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
