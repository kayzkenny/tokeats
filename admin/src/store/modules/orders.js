import { db } from "../../db";

// initial state
const state = {
  orders: []
};

// getters
const getters = {
  orders: state => state.orders
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
    // proxyOrders.forEach(order => {
    //   order.orderDate = order.orderDate.toDate();
    // });
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
