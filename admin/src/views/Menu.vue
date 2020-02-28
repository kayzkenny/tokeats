<template>
  <v-container class="mt-2">
    <v-tabs v-model="tab" center-active grow>
      <v-tab>Meals</v-tab>
      <v-tab>Singles</v-tab>
      <v-tab>Sides</v-tab>
      <v-tab>Drinks</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-row class="my-4" justify="center">
            <v-card max-width="275" v-for="meal in meals" :key="meal.name" class="ma-4">
              <v-img height="220" :src="meal.imageUrl"></v-img>
              <v-card-title>&#8358;{{ meal.price }}</v-card-title>
              <v-card-subtitle>{{ meal.name }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text color="primary" :to="{name: 'Editor', params: {menu_id: meal.id} }">Edit</v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-row class="my-4" justify="center">
          <v-card max-width="275" v-for="single in singles" :key="single.name" class="ma-4">
            <v-img height="220px" :src="single.imageUrl"></v-img>
            <v-card-title>&#8358;{{ single.price }}</v-card-title>
            <v-card-subtitle>{{ single.name }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text color="primary" :to="{name: 'Editor', params: {menu_id: single.id} }">Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row class="my-4" justify="center">
          <v-card max-width="275" v-for="side in sides" :key="side.info" class="ma-4">
            <v-img height="220px" :src="side.imageUrl"></v-img>
            <v-card-title>&#8358;{{ side.price }}</v-card-title>
            <v-card-subtitle>{{ side.name }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text color="primary" :to="{name: 'Editor', params: {menu_id: side.id} }">Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-row class="my-4" justify="center">
          <v-card max-width="275" v-for="drink in drinks" :key="drink.name" class="ma-4">
            <v-img height="220px" :src="drink.imageUrl"></v-img>
            <v-card-title>&#8358;{{ drink.price }}</v-card-title>
            <v-card-subtitle>{{ drink.name }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text color="primary" :to="{name: 'Editor', params: {menu_id: drink.id} }">Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  data: () => ({
    tab: null
  }),
  methods: {},
  computed: {
    ...mapGetters("Menu", ["meals", "singles", "sides", "drinks"])
  },
  mounted() {
    this.$store.dispatch("Menu/loadMenuAction"); // get menu state
  },
  inject: ["theme"]
};
</script>
