import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
