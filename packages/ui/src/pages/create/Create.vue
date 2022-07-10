<template>
  <main>Create Page with {{ resourceName }}</main>
</template>

<script lang="ts">
import { createSimpleCRUD } from "@vue-cruder/core";
import Vue from "vue";

export default Vue.extend({
  name: "CreatePageComponent",
  props: {
    resourceName: {
      type: String,
      // required: true,
      default: "abc",
    },
  },
  data() {
    return {
      id: "",
      form: {},
      service: createSimpleCRUD(this.resourceName),
    };
  },
  methods: {
    update() {
      this.service.create({
        object: this.form,
      });
    },
  },
  mounted() {
    console.log("CreatePageComponent", this);
  },
});
</script>
