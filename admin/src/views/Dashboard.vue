<template>
  <v-container>
    <v-card class="mx-auto text-center" color="primary" dark max-width="600">
      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-progress-circular
            class="py-12"
            v-if="!isLoaded"
            :size="70"
            :width="7"
            color="rgba(255, 255, 255, .7)"
            indeterminate
          ></v-progress-circular>
          <v-sparkline
            v-if="isLoaded"
            :value="totals"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
            auto-draw
          >
            <template v-slot:label="totals">&#8358;{{ totals.value }}</template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <div class="display-1 font-weight-thin">All Time Sales</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn block text>Go to Report</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  async created() {
    this.$store.dispatch("Orders/loadOrdersAction");
  },
  computed: {
    ...mapGetters("Orders", ["totals"]),
    ...mapGetters("Orders", ["isLoaded"])
  }
};
</script>
