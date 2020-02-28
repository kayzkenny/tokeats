<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-alert type="error" v-if="feedback">{{ feedback }}</v-alert>
        <v-alert type="success" v-if="success">{{ success }}</v-alert>
      </v-col>
      <v-col cols="10">
        <v-card flat color="transparent" class="display-1 mx-auto">Your Profile</v-card>
        <v-card>
          <v-row>
            <v-col cols="6">
              <v-form class="my-4 ml-9" @submit.prevent="update">
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field label="Name" v-model="name"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Price" v-model="price"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select :items="categories" v-model="category" label="Select Category"></v-select>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
            <v-col cols="6">
              <div class="mr-9">
                <v-img :src="imageUrl" max-height="175" contain></v-img>
                <v-file-input type="file" accept="image/*" label="Choose File" v-model="imageUrl"></v-file-input>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <v-row justify="center" dense>
          <v-btn class="mt-4 primary" @click="updateItem">Update</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Editor",
  data: () => ({
    feedback: null,
    success: null,
    image: null,
    categories: ["meal", "single", "side", "drink"]
  }),
  methods: {
    async updateItem() {
      let result = await this.$store.dispatch("Menu/updateItemAction");
      if (result) {
        this.$router.push({ path: "menu" });
      }
    }
  },
  computed: {
    name: {
      get() {
        return this.$store._modules.root.state.Menu.item.name;
      },
      set(name) {
        this.$store.dispatch("Menu/updateNameAction", name);
      }
    },
    price: {
      get() {
        return this.$store._modules.root.state.Menu.item.price;
      },
      set(price) {
        this.$store.dispatch("Menu/updatePriceAction", price);
      }
    },
    category: {
      get() {
        return this.$store._modules.root.state.Menu.item.category;
      },
      set(category) {
        this.$store.dispatch("Menu/updateCategoryAction", category);
      }
    },
    imageUrl: {
      get() {
        return this.$store._modules.root.state.Menu.item.imageUrl;
      },
      set(imageUrl) {
        this.$store.dispatch("Menu/updateImageUrlAction", imageUrl);
      }
    }
  },
  created() {
    this.$store.dispatch("Menu/loadMenuAction");
    this.$store.dispatch("Menu/loadItemAction", this.$route.params.menu_id);
  }
};
</script>

