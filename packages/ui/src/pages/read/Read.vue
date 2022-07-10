<template>
  <main></main>
</template>

<script lang="ts">
import { createSimpleCRUD } from "@vue-cruder/core";
import Vue from "vue";

export default Vue.extend({
  name: "ReadPage",
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      id: "",
      service: createSimpleCRUD(this.resource),
    };
  },
  methods: {
    read() {
      this.service.read(this.id);
    },
  },
  mounted() {
    this.read();
  },
});
</script>
