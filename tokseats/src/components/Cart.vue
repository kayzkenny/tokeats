<template>
  <v-container class="py-8 px-12 mx-auto">
    <v-row>
      <v-col cols="12" lg="7" md="7" class="px-6 pt-12">
        <v-card flat color="transparent" class="headline"
          >Please enter your delivery details</v-card
        >
        <v-form class="mx-auto my-4" @submit.prevent="submitOrder">
          <v-text-field v-model="firstName" label="First Name"></v-text-field>

          <v-text-field v-model="lastName" label="Last Name"></v-text-field>

          <v-text-field
            v-model="phoneNumber"
            type="number"
            label="Phone Number"
          ></v-text-field>

          <v-textarea auto-grow v-model="address" label="Address"></v-textarea>

          <v-text-field
            v-model="zipCode"
            type="number"
            label="Zip Code"
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="12" lg="5" md="5">
        <v-card class="px-6 pt-6">
          <v-row justify="center">
            <v-card flat color="transparent" class="headline">Your Cart</v-card>
          </v-row>
          <v-divider class="mt-2"></v-divider>
          <v-row v-for="item in cart" :key="item.name" no-gutters>
            <v-col cols="7" lg="8" md="8">
              <v-row justify="start">
                <v-card flat color="transparent" max-width="300px">
                  <v-card-text>
                    <p class="title">{{ item.name }}</p>
                    <v-icon small class="d-inline">mdi-close</v-icon>
                    <v-btn small text @click="removeItem(item)">Remove</v-btn>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-col>
            <v-col cols="5" lg="4" md="4">
              <v-row justify="end">
                <v-card flat color="transparent" max-width="300px">
                  <v-card-text>
                    <p class="title text-center">&#8358;{{ item.price }}</p>

                    <v-icon
                      color="primary large"
                      @click="increaseQuantity(item)"
                      >mdi-plus-box-outline</v-icon
                    >

                    <p
                      class="d-inline body-1 mx-1"
                      color="#000000"
                      :cart="item.quantity"
                    >
                      {{ item.quantity }}
                    </p>

                    <v-icon
                      color="primary large"
                      @click="decreaseQuantity(item)"
                      >mdi-minus-box-outline</v-icon
                    >
                  </v-card-text>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="9">
              <v-row justify="start">
                <v-card flat color="transparent" max-width="300px">
                  <v-card-text>
                    <p class="title">Order Total</p>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row justify="end">
                <v-card flat color="transparent" max-width="300px">
                  <v-card-text>
                    <p class="title">&#8358;{{ total }}</p>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
      // increase quantity of the cart item
      this.$store.dispatch("Cart/increaseQuantityAction", item);
    },
    decreaseQuantity(item) {
      // decrease quantity of the cart item
      this.$store.dispatch("Cart/decreaseQuantityAction", item);
    },
    removeItem(item) {
      // // remove an item from the cart item
      this.$store.dispatch("Cart/removeItemAction", item);
    }
  }
};
</script>
