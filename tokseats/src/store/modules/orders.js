import { db, fb } from "../../db";

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
    const currentUser = fb.auth().currentUser;
    db.collection("users")
      .doc(currentUser.email)
      .collection("orders")
      .orderBy("orderDate", "desc")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          proxyOrders.push(doc.data());
        });
      })
      .then(() => {
        proxyOrders.forEach(order => {
          order.orderDate = order.orderDate.toDate().toDateString();
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
