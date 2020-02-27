import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue")
  },
  {
    path: "/editor/:menu_id",
    name: "Editor",
    component: () => import("../views/Editor.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
