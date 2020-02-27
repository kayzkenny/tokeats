import { db } from "../../db";
// import * as moment from "moment";

// initial state
const state = {
  orders: [],
  totals: []
};

// getters
const getters = {
  orders: state => {
    state.orders.forEach(order => {
      order.orderDate = order.orderDate.toDate().toDateString();
    });
    return state.orders;
  },
  totals: state => {
    if (state.totals.length < 1) {
      state.orders.forEach(({ total }) => {
        state.totals.push(total);
      });
    }
    return state.totals;
  },
  isLoaded: state => !!state.orders.length
};

// actions
const actions = {
  loadOrdersAction({ commit }) {
    commit("loadOrders");
  }
};

// mutations
const mutations = {
  loadOrders(state) {
    let proxyOrders = [];
    db.collection("orders")
      .orderBy("orderDate", "desc")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          proxyOrders.push(doc.data());
        });
      });
    state.orders = proxyOrders;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
