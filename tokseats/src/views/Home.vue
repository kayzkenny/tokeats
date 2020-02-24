<template>
  <div>
    <Fab />
    <Menu />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Fab from "@/components/Fab.vue";

export default {
  name: "Home",
  components: {
    Menu,
    Fab
  }
};
</script>
