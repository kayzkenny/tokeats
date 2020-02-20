import { fb } from "../../db";

// initial state
const state = {
  user: {}
};

// actions
const actions = {
  loadUserAction({ commit }) {
    commit("loadUser");
  }
};

// mutations
const mutations = {
  // get all menu items
  loadUser(state) {
    state.user = fb.auth().currentUser;
  },
  resetUser(state) {
    state.user = {};
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
