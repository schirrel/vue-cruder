import Vue from "vue";
import VueRouter from "vue-router";
import crudRoutes from "./crud/index";
Vue.use(VueRouter);

export const routes = [...crudRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
