<template>
  <v-container class="py-8 px-12 mx-auto">
    <v-row>
      <v-col cols="12" lg="7" md="7">
        <DeliveryForm />
      </v-col>
      <v-col cols="12" lg="5" md="5">
        <Cart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Cart from "@/components/Cart.vue";
import DeliveryForm from "@/components/DeliveryForm.vue";
export default {
  name: "Checkout",
  components: {
    Cart,
    DeliveryForm
  }
};
</script>
