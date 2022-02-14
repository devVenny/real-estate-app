import { createWebHistory, createRouter } from "vue-router";
import Product from "../views/Product.vue";
import Info from "../views/Info.vue";

const routes = [
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/Info",
    component: Info,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
