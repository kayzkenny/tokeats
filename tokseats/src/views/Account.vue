<template>
  <v-container>
    <Bio />
    <Orders />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Bio from "@/components/Bio.vue";
import Orders from "@/components/Orders.vue";

export default {
  name: "Account",
  components: {
    Bio,
    Orders
  }
};
</script>
