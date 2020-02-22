<template>
  <div>
    <v-app-bar color="white">
      <v-btn icon text to="/">
        <v-img :src="require('../assets/tokseatslogo.svg')" max-height="40" max-width="40"></v-img>
      </v-btn>
      <v-toolbar-title>Toks Eats</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="user" to="/account">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn text small v-if="user" @click="logOut">Log Out</v-btn>
      <v-btn text small v-if="!user" to="/login">Log In</v-btn>
      <v-btn text small to="/signup" v-if="!user">Sign Up</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { fb } from "../db.js";
import { mapGetters } from "vuex";
export default {
  name: "AppBar",
  methods: {
    logOut() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("User/resetUserAction");
          this.$router.push({ name: "Login" });
        })
        .catch(error => alert(error.message));
    }
  },
  computed: {
    ...mapGetters("User", ["user"])
  },
  updated() {
    this.$store.dispatch("User/loadUserAction");
  }
};
</script>
