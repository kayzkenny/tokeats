<template>
  <v-container>
    <v-container></v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card flat color="transparent" class="display-1 mx-auto mt-4">Your Orders</v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="pa-4"
          ></v-text-field>
          <v-progress-linear v-if="!isLoaded" indeterminate color="primary"></v-progress-linear>
          <v-data-table
            v-if="isLoaded"
            :headers="headers"
            :items="orders"
            :items-per-page="5"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Orders",
  computed: {
    ...mapGetters("Orders", ["orders"]),
    ...mapGetters("Orders", ["isLoaded"])
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "First Name",
        align: "start",
        value: "firstName"
      },
      { text: "Last Name", value: "lastName" },
      { text: "Total", value: "total" },
      { text: "Phone Number", value: "phoneNumber" },
      { text: "Order Date", value: "orderDate" }
    ]
  }),
  created() {
    this.$store.dispatch("Orders/loadOrdersAction");
  }
};
</script>
