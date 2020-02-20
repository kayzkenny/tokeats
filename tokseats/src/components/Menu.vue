<template>
  <v-container class="px-8 py-4">
    <v-row justify="center">
      <p class="my-2 mx-auto display-1">Meals</p>
    </v-row>
    <v-row class="my-4" justify="center">
      <v-card max-width="300" v-for="meal in meals" :key="meal.name" class="ma-4">
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
    <v-row class="my-4 mx-auto" justify="center">
      <v-card max-width="300" v-for="single in singles" :key="single.name" class="ma-4">
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
    <v-row class="my-4 mx-auto" justify="center">
      <v-card max-width="300" v-for="side in sides" :key="side.info" class="ma-4">
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
    <v-row class="my-4 mx-auto" justify="center">
      <v-card max-width="300" v-for="drink in drinks" :key="drink.name" class="ma-4">
        <v-img height="220px" :src="drink.imageUrl"></v-img>
        <v-card-title>&#8358;{{ drink.price }}</v-card-title>
        <v-card-subtitle>{{ drink.name }}</v-card-subtitle>
        <v-card-actions>
          <v-btn text color="primary">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  // TODO
  // use skeleton loaders to display menu
  // by setting loading state to true when loadUser action is resolved
  // TODO
  computed: {
    ...mapGetters("menu", ["meals", "singles", "sides", "drinks"])
  }
};
</script>
