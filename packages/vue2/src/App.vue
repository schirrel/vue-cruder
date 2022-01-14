<template>
  <div id="app">
    <h1>Form</h1>

    <Form
      name="form1"
      title="With Service"
      v-if="service"
      :fields="formFields"
      @submit="save"
      @error="errorSaving"
      :service="service"
    >
    </Form>
    <hr />

    <p>Without service</p>
    <Form
      name="form2"
      :fields="formFields2"
      @submit="save"
      @error="errorSaving"
    >
    </Form>

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
import Form from "@/components/Form/Form.vue";
import { FieldOptions } from "@/components/model/index";

import List from "@/components/List/List.vue";

export default Vue.extend({
  name: "App",
  components: {
    Form,
    List,
  },
  data: () => ({
    service: null,
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
    formFields2: [
      {
        id: "booleanType",
        label: "My Boolean 2",
        type: FieldOptions.BOOLEAN,
      },
    ],

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
  methods: {
    save(fields) {
      console.log("After submit", fields);
    },
    errorSaving(err) {
      console.log("ERROR", err);
    },
  },
});
</script>

<style lang="scss"></style>
