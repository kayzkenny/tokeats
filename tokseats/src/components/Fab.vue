<template>
  <div>
    <v-btn fab large right fixed bottom color="secondary" to="/checkout" v-if="cart.length > 0">
      <v-badge top right overlap class="align-self-center" color="primary">
        <template v-slot:badge>
          <span>{{ cart.length }}</span>
        </template>
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Fab",
  computed: {
    ...mapState({
      cart: state => state.Cart.cart
    })
  }
};
</script>