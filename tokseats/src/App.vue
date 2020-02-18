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
export default {
  name: "App",
  components: {
    AppBar,
    Footer
  },
  created() {
    this.$store.dispatch("loadMenuAction"); // get menu state
    this.$store.dispatch("loadUserAction"); // get user state
  },
  updated() {
    this.$store.dispatch("loadUserAction");
  }
};
</script>
