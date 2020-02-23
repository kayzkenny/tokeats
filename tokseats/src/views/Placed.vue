<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-card flat color="transparent" class="my-4">
          <p class="text-center title">{{ firstName }} thank's for ordering from Toks Eats</p>
          <p class="text-center subtitle-1">Your order is on its way</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-img class="my-4" max-height="200" contain :src="require('../assets/delivery.svg')"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-btn class="primary mx-12" to="/">Continue Shopping</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Placed",
  computed: {
    ...mapGetters("Account", ["firstName"])
  }
};
</script>