<template>
  <v-container class="py-8 px-12 mx-auto">
    <v-row>
      <v-col cols="12" lg="7" md="7">
        <DeliveryForm />
      </v-col>
      <v-col cols="12" lg="5" md="5">
        <Cart />
        <v-row justify="center" class="mt-4">
          <v-radio-group v-model="payOption">
            <v-radio label="Pay cash on delivery" value="cash"></v-radio>
            <v-radio label="Pay now with your card" value="card"></v-radio>
          </v-radio-group>
        </v-row>
        <v-row justify="center">
          <v-btn class="my-8 primary" @click="submitOrder">Confirm Order</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Cart from "@/components/Cart.vue";
import DeliveryForm from "@/components/DeliveryForm.vue";
import { db } from "../db";
import { mapGetters } from "vuex";
export default {
  name: "Checkout",
  data: () => ({
    payOption: "cash"
  }),
  components: {
    Cart,
    DeliveryForm
  },
  computed: {
    ...mapGetters("User", ["user"]),
    ...mapGetters("Cart", ["total", "cart"]),
    ...mapGetters("Account", [
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
      "zipCode"
    ])
  },
  methods: {
    submitOrder() {
      if (this.payOption === "cash") {
        if (this.user) {
          // send auth user order to firestore "orders" subcollection
          db.collection("users")
            .doc(this.user.email)
            .collection("orders")
            .add({
              orderDate: new Date(),
              total: this.total,
              items: this.cart
            });
          // send auth user order to firestore "orders" root collection
          db.collection("orders").add({
            orderDate: new Date(),
            total: this.total,
            items: this.cart,
            lastName: this.lastName,
            firstName: this.firstName,
            address: this.address,
            phoneNumber: this.phoneNumber,
            zipCode: this.zipCode
          });
        } else {
          // send guest user order to firestore root collection
          db.collection("orders").add({
            orderDate: new Date(),
            total: this.total,
            items: this.cart,
            lastName: this.lastName,
            firstName: this.firstName,
            address: this.address,
            phoneNumber: this.phoneNumber,
            zipCode: this.zipCode
          });
        }
        this.$router.replace({ name: "Placed" });
      } else {
        alert("Card payments are unavaliable at the moment");
      }
    }
  }
};
</script>
