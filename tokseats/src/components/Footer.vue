<template>
  <v-footer color="teal">
    <v-row justify="center">
      <v-card flat tile class="white--text text-center" color="teal">
        <v-card-text class="white--text pt-2=4">
          This is applicaiton is built for demostration purposes only. Designed
          with Adobe XD. Developed with Vue.js, Vuex, Vuetify and Firebase.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy; {{ new Date().getFullYear() }} —
          <strong>
            <a href="https://github.com/kayzkenny">Kehinde Akeredolu</a>
          </strong>
        </v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
