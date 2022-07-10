<template>
  <main></main>
</template>

<script lang="ts">
import { createSimpleCRUD } from "@vue-cruder/core";
import Vue from "vue";

export default Vue.extend({
  name: "DeletePage",
  props: {
    resourceName: {
      type: String,
      required: true,
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
      this.service.update(this.id, {
        object: this.form,
      });
    },
  },
});
</script>
