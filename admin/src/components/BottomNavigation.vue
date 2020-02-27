<template>
  <v-bottom-navigation
    v-model="bottomNav"
    grow
    :horizontal="$vuetify.breakpoint.mdAndUp"
    color="primary"
    fixed
  >
    <v-btn value="dashboard" to="/">
      <span>Dashboard</span>
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
    <v-btn value="menu" to="/menu">
      <span>Menu</span>
      <v-icon>mdi-folder</v-icon>
    </v-btn>
    <v-btn value="orders" to="/orders">
      <span>Orders</span>
      <v-icon>mdi-file-document</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation",
  data() {
    return {
      bottomNav: "dashboard"
    };
  }
};
</script>