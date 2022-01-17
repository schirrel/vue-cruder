<template>
  <section v-if="service">
    <h1>Normal List</h1>
{{ service}}
    <List  :service="service" :headers="headers" />

    <!-- <hr />
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
    /> -->
  </section>
</template>
<script lang="ts">
import Vue from "vue";

import { createSimpleCRUD } from "@vue-cruder/core";
import { List } from "@vue-cruder/ui";

export default Vue.extend({
  name: "UsingList",
  components: { List },
  data() {
    return {
      service: {},
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
            row.sent = true
            // console.log("send", row);
          },
        },
        {
          type: "cancel",
          text: "Cancel",
          callback: (row) => {
            row.canceled = true
            // console.log("cancel", row);
          },
        },
      ],
    };
  },
  mounted() {
    this.service =  createSimpleCRUD({
      baseURL: "https://jsonplaceholder.typicode.com/users",
      /**
       * Any auth stuff goes here
       */
    });
    this.service.read("test")

    console.dir(this.service)
  },
});
</script>
<style lang="scss" src="./UsingList.scss" scoped />
