import { db, fb } from "../../db";

// initial state
const state = {
  bio: {
    firstName: null,
    lastName: null,
    address: null,
    phoneNumber: null,
    zipCode: null
  }
};

// getters
const getters = {
  firstName: state => state.bio.firstName,
  lastName: state => state.bio.lastName,
  address: state => state.bio.address,
  phoneNumber: state => state.bio.phoneNumber,
  zipCode: state => state.bio.zipCode
};

// actions
const actions = {
  loadAccountAction({ commit }) {
    commit("loadAccount");
  }
};

// mutations
const mutations = {
  loadAccount(state) {
    const currentUser = fb.auth().currentUser;
    if (currentUser) {
      db.collection("users")
        .doc(currentUser.email)
        .get()
        .then(snapshot => {
          state.bio.firstName = snapshot.data().firstName;
          state.bio.lastName = snapshot.data().lastName;
          state.bio.address = snapshot.data().address;
          state.bio.phoneNumber = snapshot.data().phoneNumber;
          state.bio.zipCode = snapshot.data().zipCode;
        })
        .catch(error => {
          alert(error);
        });
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
