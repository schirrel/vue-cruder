<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Form :fields="formFields" @submit="save"> </Form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createSimpleCRUD } from "@vue-cruder/core";
import Form from "@/components/form/Form.vue";
import { FieldOptions } from "@/components/model";

export default Vue.extend({
  name: "App",
  components: {
    Form,
  },
  data: () => ({
    formFields: [
      {
        id: "password",
        type: FieldOptions.PASSWORD,
        label: "My password",
        placeholder: "textType placeholder",
      },
      {
        id: "textType",
        placeholder: "textType placeholder",
        required: true,
        class: "textType-class",
        label: "My Input",
        type: FieldOptions.TEXT,
      },
      {
        id: "dateType",
        placeholder: "dateType placeholder",
        required: true,
        class: "dateType-class",
        label: "My Date",
        type: FieldOptions.DATE,
      },
    ],
  }),
  async mounted() {
    const service = createSimpleCRUD({
      baseURL: "https://jsonplaceholder.typicode.com",
      /**
       * Any auth stuff goes here
       */
    });

    // service.read("1");
    // service.list({
    //   page: 3,
    //   size: 10,
    //   name: "John",
    // });
    // service.create({
    //   name: "John",
    // });
    // service.update("1", {
    //   name: "John",
    // });
    // service.delete("1");
  },
  methods: {
    save(fields) {
      // console.log("RECIEVED", fields);
    },
  },
});
</script>

<style lang="scss"></style>
