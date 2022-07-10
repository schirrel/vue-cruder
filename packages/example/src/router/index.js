import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { createRoute } from "@vue-cruder/ui";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

routes.push(
  createRoute({
    name: "createCredentials",
    path: "/credentials",
    options: {
      type: "create",
      resourceName: "credentials",
    },
  })
);

const otherRoute = createRoute({
  name: "other",
  path: "/other",
  options: {
    type: "update",
    resourceName: "update",
  },
});
otherRoute.props = () => {
  return { topUser: "123", type: "update", resourceName: "update" };
};

routes.push(otherRoute);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
