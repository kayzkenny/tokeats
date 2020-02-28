import { db, fb } from "../../db";

// initial state
const state = {
  menu: [],
  item: {}
};

// getters
const getters = {
  // filter all menu items into categories (meals, singles, sides, drinks)
  meals: state => state.menu.filter(item => item.category === "meal"),
  singles: state => state.menu.filter(item => item.category === "single"),
  sides: state => state.menu.filter(item => item.category === "side"),
  drinks: state => state.menu.filter(item => item.category === "drink"),
  item: state => state.item
};

// actions
const actions = {
  loadMenuAction({ commit }) {
    commit("loadMenu");
  },
  loadItemAction({ commit }, menu_id) {
    commit("loadItem", menu_id);
  },
  updateNameAction({ commit }, name) {
    commit("updateName", name);
  },
  updatePriceAction({ commit }, price) {
    commit("updatePrice", price);
  },
  updateCategoryAction({ commit }, category) {
    commit("updateCategory", category);
  },
  updateImageUrlAction({ commit }, imageUrl) {
    commit("updateImageUrl", imageUrl);
  },
  updateItemAction({ commit }) {
    commit("updateItem");
  }
};

// mutations
const mutations = {
  // get all menu items
  loadMenu(state) {
    let proxyMenu = [];
    db.collection("menu")
      .get()
      .then(snapshot =>
        snapshot.forEach(doc => {
          const item = doc.data();
          item.id = doc.id;
          proxyMenu.push(item);
        })
      );
    state.menu = proxyMenu;
  },
  loadItem(state, menu_id) {
    db.collection("menu")
      .doc(menu_id)
      .get()
      .then(doc => {
        if (doc.exists) {
          state.item = doc.data();
          state.item.id = doc.id;
        }
      });
  },
  updateItem(state) {
    const storageRef = fb.storage().ref("menu-images/" + state.item.name);
    let uploadTask = storageRef.putString(state.item.imageUrl);
    uploadTask.on("state_changed", () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        // resume = downloadURL;
        console.log("File available at ", downloadURL);
        db.collection("menu")
          .doc(state.item.id)
          .update({
            imageUrl: downloadURL
          })
          .then(() => {
            console.log("updated imageUrl on firebase " + downloadURL);
          })
          .then(() => {
            storageRef.updateMetadata({
              contentType: "image/jpeg"
            });
          })
          .catch(error => {
            console.log("Error writing document: ", error);
          });
      });
    });

    const itemRef = db.collection("menu").doc(state.item.id);
    itemRef.update({
      category: state.item.category,
      name: state.item.name,
      price: state.item.price
    });
  },
  updateName(state, name) {
    state.item.name = name;
  },
  updatePrice(state, price) {
    state.item.price = price;
  },
  updateCategory(state, category) {
    state.item.category = category;
  },
  updateImageUrl(state, imageUrl) {
    state.item.imageUrl = URL.createObjectURL(imageUrl);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
