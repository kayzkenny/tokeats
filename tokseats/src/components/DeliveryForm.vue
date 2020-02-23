<template>
  <div>
    <v-card flat color="transparent" class="px-6 pt-6">
      <p class="headline text-center">Please enter your delivery details</p>
      <v-form class="mx-auto my-4" @submit.prevent="submitOrder">
        <v-row>
          <v-col cols="12" md="6" sm="3">
            <v-text-field v-model="firstName" label="First Name"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="3">
            <v-text-field v-model="lastName" label="Last Name"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="3">
            <v-text-field v-model="phoneNumber" type="number" label="Phone Number"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="3">
            <v-text-field v-model="zipCode" type="number" label="Zip Code"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea auto-grow v-model="address" label="Address"></v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DeliveryForm",
  computed: {
    ...mapGetters("Account", {
      firstName: "firstName",
      lastName: "lastName",
      address: "address",
      phoneNumber: "phoneNumber",
      zipCode: "zipCode"
    })
  },
  mounted() {
    this.$store.dispatch("Account/loadAccountAction"); // get account state
  }
};
</script>
