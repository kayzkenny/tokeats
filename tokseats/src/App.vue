<template>
  <v-app>
    <AppBar />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    AppBar,
    Footer
  },
  created() {
    this.$store
      .dispatch("User/loadUserAction")
      .catch(error => console.log(error)); // get user state
    this.$store
      .dispatch("Cart/loadLocalCartAction", window.localStorage.localCart)
      .catch(error => console.log(error)); // load the local cart
  },
  computed: {
    ...mapState({
      cart: state => state.Cart.cart
    })
  },
  updated() {
    console.log("Updated Called");
    if (this.cart) {
      window.localStorage.localCart = JSON.stringify(this.cart);
    }
  }
};
</script>
