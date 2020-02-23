import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { fb } from "../db.js";

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
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"), // lazy loaded route
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/placed",
    name: "Placed",
    component: () => import("../views/Placed.vue") // lazy loaded route
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// check if route requiresAuth
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    const user = fb.auth().currentUser;
    // check auth state of user
    if (user) {
      next(); // user signed in, proceed to route
    } else {
      next({ name: "Login" }); // user not signed in, route to login
    }
  } else {
    next(); // route does not require auth
  }
});

export default router;
