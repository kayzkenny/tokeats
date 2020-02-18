<template>
  <div>
    <v-app-bar color="white">
      <v-btn icon text to="/" color="primary">
        <v-img
          :src="require('../assets/tokseatslogo.svg')"
          max-height="40"
          max-width="40"
          contain
        ></v-img>
      </v-btn>

      <v-toolbar-title>Toks Eats</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar"
};
</script>
