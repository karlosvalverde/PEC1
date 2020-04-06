<template>
  <div id="app">
    <menu-nav></menu-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuNav from "../components/Menu.vue";
export default {
  name: "app",
  components: {
    MenuNav,
  },
};
</script>
