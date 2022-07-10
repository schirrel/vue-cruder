<template>
  <div id="app">
    <div id="nav">
      <template v-for="link in links">
        <router-link :key="link.path" :to="link.path">{{
          link.name
        }}</router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
import "@vue-cruder/ui/dist/index.css";
import { routes } from "./router/index";
export default {
  name: "App",
  data() {
    return {
      links: routes,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  gap: 8px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
