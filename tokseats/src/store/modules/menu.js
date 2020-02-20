import { db } from "../../db";

// initial state
const state = {
  menu: []
};

// getters
const getters = {
  // filter all menu items into categories (meals, singles, sides, drinks)
  meals: state => state.menu.filter(item => item.category === "meal"),
  singles: state => state.menu.filter(item => item.category === "single"),
  sides: state => state.menu.filter(item => item.category === "side"),
  drinks: state => state.menu.filter(item => item.category === "drink")
};

// actions
const actions = {
  loadMenuAction({ commit }) {
    commit("loadMenu");
  }
};

// mutations
const mutations = {
  // get all menu items
  loadMenu(state) {
    let proxyMenu = [];
    db.collection("menu")
      .get()
      .then(snapshot => snapshot.forEach(doc => proxyMenu.push(doc.data())));
    state.menu = proxyMenu;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
