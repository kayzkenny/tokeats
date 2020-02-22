<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-alert type="error" v-if="feedback">{{ feedback }}</v-alert>
      </v-col>

      <v-col cols="10">
        <v-alert type="success" v-if="success">{{ success }}</v-alert>
      </v-col>

      <v-col cols="10">
        <v-card flat color="transparent" class="display-1 mx-auto">Your Profile</v-card>

        <v-form class="mx-auto my-4" @submit.prevent="update">
          <v-container>
            <v-row>
              <v-col cols="12" lg="3" md="6" sm="6">
                <v-text-field v-model="firstName" label="First Name"></v-text-field>
              </v-col>
              <v-col cols="12" lg="3" md="6" sm="6">
                <v-text-field v-model="lastName" label="Last Name"></v-text-field>
              </v-col>
              <v-col cols="12" lg="3" md="6" sm="6">
                <v-text-field v-model="phoneNumber" type="number" label="Phone Number"></v-text-field>
              </v-col>
              <v-col cols="12" lg="3" md="6" sm="6">
                <v-text-field v-model="zipCode" type="number" label="Zip Code"></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" lg="12">
                <v-textarea auto-grow v-model="address" label="Address"></v-textarea>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn class="mr-4 primary" @click="update" :loading="loading">Update</v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <v-btn color="primary" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { db } from "../db.js";
import { mapGetters } from "vuex";
export default {
  name: "SignUp",
  data: () => ({
    feedback: null,
    success: null,
    firstName: null,
    lastName: null,
    address: null,
    phoneNumber: null,
    zipCode: null,
    loading: false,
    snackbar: false,
    text: "Profile Updated",
    timeout: 2000
  }),
  methods: {
    update() {
      this.loading = true;
      if (
        this.firstName &&
        this.lastName &&
        this.address &&
        this.phoneNumber &&
        this.zipCode
      ) {
        // update user data with the values provided in the form
        db.collection("users")
          .doc(this.user.email)
          .set({
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            phoneNumber: this.phoneNumber,
            zipCode: this.zipCode
          })
          .then(() => {
            this.loading = false;
            this.snackbar = true;
          })
          .catch(error => {
            alert("Error writing document: ", error);
          });
      } else {
        this.feedback = "You must enter all fields";
      }
    }
  },
  created() {
    // populate the data properties with firestore user data
    db.collection("users")
      .doc(this.user.email)
      .get()
      .then(snapshot => {
        this.firstName = snapshot.data().firstName;
        this.lastName = snapshot.data().lastName;
        this.address = snapshot.data().address;
        this.phoneNumber = snapshot.data().phoneNumber;
        this.zipCode = snapshot.data().zipCode;
      })
      .catch(error => {
        alert(error);
      });
  },
  computed: {
    ...mapGetters("User", ["user"])
  }
};
</script>