import Vue from "vue";
import UsingForm from "./components/UsingForm/UsingForm.vue";
import UsingList from "./components/UsingList/UsingList.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: "/form", component: UsingForm },
  { path: "/list", component: UsingList },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
  routes, // short for `routes: routes`
});
