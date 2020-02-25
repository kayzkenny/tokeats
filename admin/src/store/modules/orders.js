import { db } from "../../db";
// import * as moment from "moment";

// initial state
const state = {
  orders: []
};

let totals = [];

// getters
const getters = {
  orders: state => {
    state.orders.forEach(order => {
      order.orderDate = order.orderDate.toDate().toDateString();
    });
    return state.orders;
  },
  totals: state => {
    state.orders.forEach(({ total }) => {
      totals.push(total);
    });
    return totals;
  }
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
