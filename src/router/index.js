import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue")
  },
  {
    path: "/stencil",
    name: "Stencil",
    component: () => import("../views/Stencil.vue")
  },
  {
    path: "/newsx",
    name: "Newsx",
    component: () => import("../views/Newsx.vue")
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
