<template>
  <div id="app">
    <menu-nav></menu-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuNav1 from "../components/Menu_1.vue";
import MenuNav2 from "../components/Menu_2.vue";
export default {
  name: "app",
  components: {
    MenuNav1,
    MenuNav2,
  },
};
</script>
