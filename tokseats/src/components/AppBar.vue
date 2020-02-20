<template>
  <div>
    <v-app-bar color="white">
      <v-btn icon text to="/" color="primary">
        <v-img :src="require('../assets/tokseatslogo.svg')" max-height="40" max-width="40" contain></v-img>
      </v-btn>

      <v-toolbar-title>Toks Eats</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text small v-if="user" @click="logOut">Log Out</v-btn>

      <v-btn text small v-if="!user" to="/login">Log In</v-btn>

      <v-btn text small to="/signup" v-if="!user">Sign Up</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { fb } from "../db.js";
import { mapState } from "vuex";
export default {
  name: "AppBar",
  methods: {
    logOut() {
      fb.auth()
        .signOut()
        .then(() => {
          // Sign-out successful. set the user state to null
          this.$store.dispatch("user/resetUserAction");
          this.$router.push({ name: "Login" });
        })
        .catch(error => alert(error.message));
    }
  },
  computed: mapState({
    // get the user state
    user: state => state.user.currentUser
  }),
  updated() {
    console.log("AppBar Updated");
    this.$store.dispatch("user/loadUserAction");
  }
};
</script>
