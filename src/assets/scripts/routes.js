import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../routes/home.vue");
const About = () => import("../routes/about.vue");

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
  ],
});
