<template>
  <div id="app">
    <!-- <div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>-->
    <menu></menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  name: "app",
  components: {
    Menu,
  },
  /* data() {
    return {
      texto: "This is a text.",
    }; */
};
</script>

<!--<style lang="scss" scoped>
@import "assets/styles/main.scss";
</style>-->
