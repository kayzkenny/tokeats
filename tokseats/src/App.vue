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
    this.$store.dispatch("User/loadUserAction");
    if (window.localStorage.localCart) {
      this.$store.dispatch(
        "Cart/loadLocalCartAction",
        window.localStorage.localCart
      );
    }
  },
  computed: {
    ...mapState({
      cart: state => state.Cart.cart
    })
  },
  updated() {
    if (this.cart) {
      window.localStorage.localCart = JSON.stringify(this.cart);
    }
  }
};
</script>
