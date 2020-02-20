import { fb } from "../../db";

// initial state
const state = {
  currentUser: {}
};

// actions
const actions = {
  loadUserAction({ commit }) {
    commit("loadUser");
  },
  resetUserAction({ commit }) {
    commit("resetUser");
  }
};

// mutations
const mutations = {
  // get all menu items
  loadUser(state) {
    state.currentUser = fb.auth().currentUser;
  },
  resetUser(state) {
    state.currentUser = {};
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
