<template>
  <v-container class="px-8 py-4">
    <div>
      <v-row justify="center">
        <p class="my-2 mx-auto display-1">Meals</p>
      </v-row>
      <v-sheet
        v-if="!menuLoaded"
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="px-3 py-3"
      >
        <v-row justify="center">
          <v-col cols="12" lg="4" md="6" sm="6">
            <v-skeleton-loader class="mx-4" max-width="350" type="card"></v-skeleton-loader>
          </v-col>
          <v-col cols="12" lg="4" md="6" sm="6">
            <v-skeleton-loader class="mx-4" max-width="350" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-sheet>
      <v-row class="my-4" justify="center">
        <v-card max-width="250" v-for="meal in meals" :key="meal.name" class="ma-4">
          <v-img height="220" :src="meal.imageUrl"></v-img>
          <v-card-title>&#8358;{{ meal.price }}</v-card-title>
          <v-card-subtitle>{{ meal.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <p class="my-2 mx-2 display-1">Singles</p>
      </v-row>
      <v-row v-if="menuLoaded" class="my-4" justify="center">
        <v-card max-width="250" v-for="single in singles" :key="single.name" class="ma-4">
          <v-img height="220px" :src="single.imageUrl"></v-img>
          <v-card-title>&#8358;{{ single.price }}</v-card-title>
          <v-card-subtitle>{{ single.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <p class="my-2 mx-2 display-1">Sides</p>
      </v-row>
      <v-row v-if="menuLoaded" class="my-4" justify="center">
        <v-card max-width="250" v-for="side in sides" :key="side.info" class="ma-4">
          <v-img height="220px" :src="side.imageUrl"></v-img>
          <v-card-title>&#8358;{{ side.price }}</v-card-title>
          <v-card-subtitle>{{ side.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <p class="my-2 mx-2 display-1">Drinks</p>
      </v-row>
      <v-row v-if="menuLoaded" class="my-4" justify="center">
        <v-card max-width="250" v-for="drink in drinks" :key="drink.name" class="ma-4">
          <v-img height="220px" :src="drink.imageUrl"></v-img>
          <v-card-title>&#8358;{{ drink.price }}</v-card-title>
          <v-card-subtitle>{{ drink.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  data: () => ({
    menuLoaded: false
  }),
  computed: {
    ...mapGetters("menu", ["meals", "singles", "sides", "drinks"])
  },
  created() {
    this.$store
      .dispatch("menu/loadMenuAction")
      .catch(error => console.log(error)); // get menu state
  },
  updated() {
    this.menuLoaded = true;
    console.log(this.menuLoaded);
  },
  inject: ["theme"]
};
</script>
