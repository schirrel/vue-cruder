<template>
  <main></main>
</template>

<script lang="ts">
import { createSimpleCRUD } from "@vue-cruder/core";
import Vue from "vue";

export default Vue.extend({
  name: "DeletePage",
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
    delete() {
      this.service.delete(this.id);
    },
  },
});
</script>
