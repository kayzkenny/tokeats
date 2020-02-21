import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue") // lazy loaded route
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue") // lazy loaded route
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue") // lazy loaded route
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
