<template>
  <div id="app">
    <h1>Playground</h1>
    <h2>Form Builder</h2>
    <div class="description">
      <Form
        v-if="service"
        title="My Form"
        :service="service"
        :options="formOptions"
      >
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createSimpleCRUD } from "@vue-cruder/core";
import { Form } from "@vue-cruder/ui";
export default Vue.extend({
  name: "App",
  components: {
    Form,
  },
  data: () => ({
    model: "",
    service: null,
    formOptions: {
      title: "Create form",
      onSuccess: () => {
        alert("Suuuuuucesso");
      },
      onError: (err) => {
        console.log(err);
      },
      fields: [
        {
          id: "name",
          type: "text",
          validations: ["required", "maxlength:120", "minlength:10"],
          label: "Name",
        },
        {
          id: "age",
          type: "number",
          validations: ["required", "minvalue:12"],
          label: "Age",
        },
      ],
    },
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

<style lang="scss">
/* From @felipefialho */
:root {
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space: 24px;
  --space-md: 32px;
  --space-lg: 48px;
  --space-xlg: 64px;
}

body {
  background-color: var(--background);
  color: var(--text-color);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

details {
  summary {
    list-style: none;
  }
}

.collapse {
  border: solid 1px var(--gray-lighter);
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  margin-left: auto;
  margin-right: auto;
  max-width: 90vw;
  transition: background-color 0.25s;
  will-change: background-color;

  &:first-child {
    margin-top: var(--space);
  }

  &:not(:last-child) {
    margin-bottom: var(--space-sm);
  }

  &:hover {
    background-color: var(--gray-lighter);
  }
}

.title {
  cursor: pointer;
  font-weight: 600;
  padding: var(--space-sm);
  position: relative;
}

.description {
  border-top: var(--gray-light) solid 1px;
  font-size: 14px;
  line-height: 21px;
  padding: var(--space-sm);
}

.horizontal {
  gap: 8px;
  display: flex;
}
</style>
