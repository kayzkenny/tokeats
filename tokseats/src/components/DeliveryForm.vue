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
import { db } from "../db.js";
import { mapGetters } from "vuex";
export default {
  name: "DeliveryForm",
  data: () => ({
    lastName: null,
    firstName: null,
    address: null,
    phoneNumber: null,
    zipCode: null
  }),
  computed: {
    ...mapGetters("User", ["user"])
  },
  created() {
    if (this.user) {
      let docRef = db.collection("users").doc(this.user.email);
      docRef
        .get()
        .then(doc => {
          if (doc.exists) {
            this.address = doc.data().address;
            this.phoneNumber = doc.data().phoneNumber;
            this.lastName = doc.data().lastName;
            this.firstName = doc.data().firstName;
            this.zipCode = doc.data().zipCode;
          } else {
            alert.log("No such document!");
          }
        })
        .catch(error => {
          alert.log("Error getting documents: ", error);
        });
    }
  }
};
</script>
