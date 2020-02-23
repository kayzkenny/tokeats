<template>
  <v-container class="px-8 py-4">
    <div>
      <v-row justify="center">
        <p class="my-2 mx-auto display-1">Meals</p>
      </v-row>
      <v-row class="my-4" justify="center">
        <v-card max-width="250" v-for="meal in meals" :key="meal.name" class="ma-4">
          <v-img height="220" :src="meal.imageUrl"></v-img>
          <v-card-title>&#8358;{{ meal.price }}</v-card-title>
          <v-card-subtitle>{{ meal.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary" @click="addToCart(meal)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <p class="my-2 mx-2 display-1">Singles</p>
      </v-row>
      <v-row class="my-4" justify="center">
        <v-card max-width="250" v-for="single in singles" :key="single.name" class="ma-4">
          <v-img height="220px" :src="single.imageUrl"></v-img>
          <v-card-title>&#8358;{{ single.price }}</v-card-title>
          <v-card-subtitle>{{ single.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary" @click="addToCart(single)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <p class="my-2 mx-2 display-1">Sides</p>
      </v-row>
      <v-row class="my-4" justify="center">
        <v-card max-width="250" v-for="side in sides" :key="side.info" class="ma-4">
          <v-img height="220px" :src="side.imageUrl"></v-img>
          <v-card-title>&#8358;{{ side.price }}</v-card-title>
          <v-card-subtitle>{{ side.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary" @click="addToCart(side)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <p class="my-2 mx-2 display-1">Drinks</p>
      </v-row>
      <v-row class="my-4" justify="center">
        <v-card max-width="250" v-for="drink in drinks" :key="drink.name" class="ma-4">
          <v-img height="220px" :src="drink.imageUrl"></v-img>
          <v-card-title>&#8358;{{ drink.price }}</v-card-title>
          <v-card-subtitle>{{ drink.name }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text color="primary" @click="addToCart(drink)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-btn fab large right fixed bottom color="secondary" to="/checkout" v-if="cart.length > 0">
        <v-badge top right overlap class="align-self-center" color="primary">
          <template v-slot:badge>
            <span>{{ cart.length }}</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
        <v-btn color="primary" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Menu",
  data: () => ({
    firstName: null,
    snackbar: false,
    text: "Item added to cart.",
    timeout: 2000
  }),
  methods: {
    addToCart(item) {
      this.$store.dispatch("Cart/addToCartAction", item); // add item to cart
      this.snackbar = true;
    }
  },
  computed: {
    ...mapState({
      cart: state => state.Cart.cart
    }),
    ...mapGetters("Menu", ["meals", "singles", "sides", "drinks"])
  },
  mounted() {
    this.$store.dispatch("Menu/loadMenuAction"); // get menu state
  },
  inject: ["theme"]
};
</script>
