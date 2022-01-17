<template>
  <section>
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
  </section>
</template>
<script lang="ts">
import Vue from "vue";

import { createSimpleCRUD } from "@vue-cruder/core";
import { Form, FieldOptions } from "@vue-cruder/ui";

export default Vue.extend({
  name: "UsingForm",
  components: { Form },
  data() {
    return {
      service: {},
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
    };
  },
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
<style lang="scss" src="./UsingForm.scss" scoped />
