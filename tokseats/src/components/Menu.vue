<template>
  <v-container class="px-8 py-4">
    <v-row justify="center">
      <p class="my-2 mx-auto display-1">Meals</p>
    </v-row>
    <v-row class="my-4" justify="center">
      <v-card
        max-width="300"
        v-for="meal in meals"
        :key="meal.name"
        class="ma-4"
      >
        <v-img height="300" :src="meal.imageUrl"> </v-img>

        <v-card-title
          >{{ meal.name }}
          <v-spacer></v-spacer>
          &#8358;{{ meal.price }}
        </v-card-title>

        <v-card-actions>
          <v-btn text color="primary">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row justify="center">
      <p class="my-2 mx-2 display-1">Singles</p>
    </v-row>
    <v-row class="my-4 mx-auto" justify="center">
      <v-card
        max-width="300"
        v-for="single in singles"
        :key="single.name"
        class="ma-4"
      >
        <v-img height="300px" :src="single.imageUrl"> </v-img>

        <v-card-title
          >{{ single.name }}
          <v-spacer></v-spacer>
          &#8358;{{ single.price }}
        </v-card-title>

        <v-card-actions>
          <v-btn text color="primary">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row justify="center">
      <p class="my-2 mx-2 display-1">Sides</p>
    </v-row>
    <v-row class="my-4 mx-auto" justify="center">
      <v-card
        max-width="300"
        v-for="side in sides"
        :key="side.info"
        class="ma-4"
      >
        <v-img height="300px" :src="side.imageUrl"> </v-img>

        <v-card-title
          >{{ side.name }}
          <v-spacer></v-spacer>
          &#8358;{{ side.price }}
        </v-card-title>

        <v-card-actions>
          <v-btn text color="primary">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row justify="center">
      <p class="my-2 mx-2 display-1">Drinks</p>
    </v-row>
    <v-row class="my-4 mx-auto" justify="center">
      <v-card
        max-width="300"
        v-for="drink in drinks"
        :key="drink.name"
        class="ma-4"
      >
        <v-img height="300px" :src="drink.imageUrl"> </v-img>

        <v-card-title
          >{{ drink.name }}
          <v-spacer></v-spacer>
          &#8358;{{ drink.price }}
        </v-card-title>

        <v-card-actions>
          <v-btn text color="primary">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Menu",
  // TODO
  // use skeleton loaders to display menu
  // by setting loading state to true when loadUser action is resolved
  // TODO
  computed: {
    user() {
      return this.$store.state.user; // get user state
    },
    menu() {
      return this.$store.state.menu; // get menu state
    },
    meals() {
      return this.$store.getters.meals; // get filtered menu for meals
    },
    singles() {
      return this.$store.getters.singles; // get filtered menu for meals
    },
    sides() {
      return this.$store.getters.sides; // get filtered menu for sides
    },
    drinks() {
      return this.$store.getters.drinks; // get filtered menu for drinks
    }
  }
};
</script>
