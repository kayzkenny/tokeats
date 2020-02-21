import Vue from "vue";

// initial state
const state = {
  cart: []
};

// getters
const getters = {
  // get the total price of all the items in the cart
  total: function(state) {
    let total = 0;
    state.cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  },
  cart: state => state.cart
};

// actions
const actions = {
  addToCartAction({ commit }, item) {
    commit("addToCart", item);
  },
  loadLocalCartAction({ commit }, localCart) {
    commit("loadLocalCart", localCart);
  },
  removeItemAction({ commit }, item) {
    commit("removeItem", item);
  },
  increaseQuantityAction({ commit }, item) {
    commit("increaseQuantity", item);
  },
  decreaseQuantityAction({ commit }, item) {
    commit("decreaseQuantity", item);
  }
};

// mutations
const mutations = {
  addToCart(state, item) {
    if (state.cart.includes(item)) {
      item.quantity++;
    } else {
      item.quantity = 1;
      state.cart.push(item);
    }
  },
  removeItem(state, item) {
    state.cart = state.cart.filter(items => items !== item);
  },
  loadLocalCart(state, localCart) {
    state.cart = JSON.parse(localCart);
  },
  increaseQuantity(state, item) {
    let index = state.cart.findIndex(items => items.name == item.name);
    const cartItem = state.cart.find(menuItem => menuItem === item);
    cartItem.quantity++;
    Vue.set(state.cart, index, cartItem);
  },
  decreaseQuantity(state, item) {
    // if the item's quantity = 1, just remove it
    if (item.quantity == 1) {
      state.cart = state.cart.filter(items => items !== item);
    } else {
      let index = state.cart.findIndex(items => items.name == item.name);
      const cartItem = state.cart.find(menuItem => menuItem === item);
      cartItem.quantity--;
      Vue.set(state.cart, index, cartItem);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
