<template>
  <div class="vue-cruder__loading-layer">
    <Loading />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loading from "./Loading.vue";

export default Vue.extend({
  name: "LoadingLayer",
  components: { Loading },
});
</script>


<style lang="scss">
.vue-cruder__loading-layer {
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  left: 0;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100000;
}
</style>