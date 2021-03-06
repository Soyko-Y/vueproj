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
    path: "/news/:id",
    name: "NewsPage",
    component: () => import("../views/NewsPage.vue")
  },
  {
    path: "/news/add",
    name: "AddNewsPage",
    component: () => import("../views/AddNewsPage.vue")
  },
  {
    path: "/news/edit/:id",
    name: "EditNewsPage",
    component: () => import("../views/EditNewsPage.vue")
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
