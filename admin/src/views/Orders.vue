<template>
  <div>
    <v-row justify="center">
      <v-col cols="10">
        <v-card flat color="transparent" class="display-1 mx-auto"
          >Your Orders</v-card
        >
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <!-- <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Items</th>
                <th class="text-left">Order Date</th>
                <th class="text-left">Order Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.total">
                <td>
                  <div v-for="items in order" :key="items.name">
                    <span v-for="meal in items" :key="meal.name">
                      <span>{{ meal.quantity }}</span>
                      <span>&nbsp;{{ meal.name }} &nbsp;</span>
                    </span>
                  </div>
                </td>
                <td>{{ order.orderDate.toDate().toLocaleDateString() }}</td>
                <td>&#8358; {{ order.total }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->
        <v-data-table
          :headers="headers"
          :items="orders"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Orders",
  computed: {
    ...mapGetters("Orders", ["orders"])
  },
  data: () => ({
    headers: [
      {
        text: "First Name",
        align: "start",
        value: "firstName"
      },
      { text: "Last Name", value: "lastName" },
      { text: "Phone Number", value: "phoneNumber" },
      { text: "Total", value: "total" },
      { text: "Order Date", value: "orderDate" }
    ]
  }),
  created() {
    this.$store.dispatch("Orders/loadOrdersAction");
  }
};
</script>
