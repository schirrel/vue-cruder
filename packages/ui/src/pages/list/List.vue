<template>
  <main></main>
</template>

<script lang="ts">
import { createSimpleCRUD } from "@vue-cruder/core";
import Vue from "vue";

export default Vue.extend({
  name: "ListPage",
  props: {
    resourceName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      service: createSimpleCRUD(this.resourceName),
    };
  },
  methods: {
    read() {
      this.service.read();
    },
  },
  mounted() {
    this.read();
  },
});
</script>
