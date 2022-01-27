<template>
  <div id="app">
    <hr />

    <h1>Normal List</h1>

    <List v-if="service" :service="service" :headers="headers" />

    <hr />
    <h2>with actions</h2>
    <hr />
    <List
      v-if="service"
      :service="service"
      :headers="headers"
      :actions="actions"
    />
    <hr />
    <h2>with default actions</h2>
    <hr />
    <List
      v-if="service"
      :service="service"
      :headers="headers"
      use-crud-actions
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createSimpleCRUD } from "@vue-cruder/core";
import List from "@/components/List/List.vue";

export default Vue.extend({
  name: "App",
  components: {
    List,
  },
  data: () => ({
    service: null,

    headers: [
      {
        text: "Name",
        key: "name",
      },
      {
        text: "Email",
        key: "email",
      },
      {
        text: "Phone",
        key: "phone",
      },
      {
        text: "Website",
        key: "website",
      },
    ],
    actions: [
      {
        type: "send",
        text: "Send",
        callback: (row) => {
          console.log("send", row);
        },
      },
      {
        type: "cancel",
        text: "Cancel",
        callback: (row) => {
          console.log("cancel", row);
        },
      },
    ],
  }),
  mounted() {
    this.service = createSimpleCRUD({
      baseURL: "https://jsonplaceholder.typicode.com/users",
      /**
       * Any auth stuff goes here
       */
    });
  },
});
</script>

<style lang="scss"></style>
