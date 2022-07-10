import Vue from "vue";
import VueRouter from "vue-router";
import crudRoutes from "./crud/index";
import Components from "../views/Components.vue";
import { componentRoutes } from "./components";

Vue.use(VueRouter);

export const routes = [
  ...crudRoutes,
  {
    name: "components",
    path: "/components",
    component: Components,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...routes, ...componentRoutes],
});

export default router;
