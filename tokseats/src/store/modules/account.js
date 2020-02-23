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
  },
  updateFirstNameAction({ commit }, firstName) {
    commit("updateFirstName", firstName);
  },
  updateLastNameAction({ commit }, lastName) {
    commit("updateLastName", lastName);
  },
  updateAddressAction({ commit }, address) {
    commit("updateAddress", address);
  },
  updatePhoneNumberAction({ commit }, phoneNumber) {
    commit("updatePhoneNumber", phoneNumber);
  },
  updateZipCodeAction({ commit }, zipCode) {
    commit("updateZipCode", zipCode);
  },
  updateAccountAction({ commit }) {
    return new Promise(resolve => {
      commit("updateAccount");
      resolve();
    });
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
  },
  updateFirstName(state, firstName) {
    state.bio.firstName = firstName;
  },
  updateLastName(state, lastName) {
    state.bio.lastName = lastName;
  },
  updateAddress(state, address) {
    state.bio.address = address;
  },
  updatePhoneNumber(state, phoneNumber) {
    state.bio.phoneNumber = phoneNumber;
  },
  updateZipCode(state, zipCode) {
    state.bio.zipCode = zipCode;
  },
  updateAccount(state) {
    const currentUser = fb.auth().currentUser;
    db.collection("users")
      .doc(currentUser.email)
      .set({
        firstName: state.bio.firstName,
        lastName: state.bio.lastName,
        address: state.bio.address,
        phoneNumber: state.bio.phoneNumber,
        zipCode: state.bio.zipCode
      })
      .catch(error => {
        console.log("Error writing document: ", error);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
