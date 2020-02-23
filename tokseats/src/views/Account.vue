<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-alert type="error" v-if="feedback">{{ feedback }}</v-alert>
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
import { mapGetters } from "vuex";
export default {
  name: "Account",
  data: () => ({
    feedback: null,
    loading: false,
    snackbar: false,
    text: "Profile Updated",
    timeout: 2000
  }),
  methods: {
    update() {
      this.loading = true;
      this.$store
        .dispatch("Account/updateAccountAction")
        .then(() => {
          this.loading = false;
          this.snackbar = true;
        })
        .catch(error => {
          this.feedback = "Error updating your profile, Reason: " + error;
        });
    }
  },
  mounted() {
    this.$store.dispatch("Account/loadAccountAction"); // get account state
  },
  computed: {
    ...mapGetters("User", ["user"]),
    // getters and setters for form fields
    firstName: {
      get() {
        return this.$store._modules.root.state.Account.bio.firstName;
      },
      set(firstName) {
        this.$store.dispatch("Account/updateFirstNameAction", firstName);
      }
    },
    lastName: {
      get() {
        return this.$store._modules.root.state.Account.bio.lastName;
      },
      set(lastName) {
        this.$store.dispatch("Account/updateLastNameAction", lastName);
      }
    },
    address: {
      get() {
        return this.$store._modules.root.state.Account.bio.address;
      },
      set(address) {
        this.$store.dispatch("Account/updateAddressAction", address);
      }
    },
    phoneNumber: {
      get() {
        return this.$store._modules.root.state.Account.bio.phoneNumber;
      },
      set(phoneNumber) {
        this.$store.dispatch("Account/updatePhoneNumberAction", phoneNumber);
      }
    },
    zipCode: {
      get() {
        return this.$store._modules.root.state.Account.bio.zipCode;
      },
      set(zipCode) {
        this.$store.dispatch("Account/updateZipCodeAction", zipCode);
      }
    }
  }
};
</script>