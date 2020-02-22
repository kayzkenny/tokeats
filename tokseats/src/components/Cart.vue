<template>
  <v-card class="pt-6">
    <v-row justify="center">
      <v-card flat color="transparent" class="headline">Your Cart</v-card>
    </v-row>
    <v-divider class="mt-2 primary"></v-divider>
    <div class="px-6">
      <v-row v-for="item in cart" :key="item.name" no-gutters>
        <v-col cols="7" lg="8" md="8">
          <v-row justify="start">
            <v-card flat color="transparent">
              <v-card-text>
                <p class="subtitle-1">{{ item.name }}</p>
                <v-icon small class="d-inline">mdi-close</v-icon>
                <v-btn small text @click="removeItem(item)">Remove</v-btn>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
        <v-col cols="5" lg="4" md="4">
          <v-row justify="end">
            <v-card flat color="transparent">
              <v-card-text>
                <p class="subtitle-1 text-right">&#8358;{{ item.price }}</p>
                <v-icon color="primary large" @click="increaseQuantity(item)">mdi-plus-box-outline</v-icon>
                <span
                  class="d-inline body-1 mx-1"
                  color="#000000"
                  :cart="item.quantity"
                >{{ item.quantity }}</span>
                <v-icon color="primary large" @click="decreaseQuantity(item)">mdi-minus-box-outline</v-icon>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider class="primary mb-2"></v-divider>
    <div class="px-6">
      <v-row>
        <v-col cols="9">
          <v-row justify="start">
            <p class="subtitle pl-4">Order Total</p>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row justify="end">
            <p class="subtitle pr-4">&#8358;{{ total }}</p>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Cart",
  data: () => ({
    lastName: null,
    firstName: null,
    address: null,
    phoneNumber: null,
    zipCode: null,
    checkbox: false
  }),
  computed: {
    ...mapState({
      cart: state => state.Cart.cart
    }),
    ...mapGetters("Cart", ["total"])
  },
  methods: {
    increaseQuantity(item) {
      this.$store.dispatch("Cart/increaseQuantityAction", item);
    },
    decreaseQuantity(item) {
      this.$store.dispatch("Cart/decreaseQuantityAction", item);
    },
    removeItem(item) {
      this.$store.dispatch("Cart/removeItemAction", item);
    }
  }
};
</script>
