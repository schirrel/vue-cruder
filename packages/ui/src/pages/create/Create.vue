<template>
  <main>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <Form v-if="service" :service="service" :options="formOptions"> </Form>
  </main>
</template>

<script lang="ts">
import { createSimpleCRUD } from "@vue-cruder/core";
import { Form } from "../../components";
import Vue, { PropOptions } from "vue";
import { FormOptions } from "../../builders/models";

export default Vue.extend({
  name: "CreatePageComponent",
  components: { Form },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    resourceName: {
      type: String,
      required: true,
    },
    formOptions: {
      type: Object,
      required: true,
    } as PropOptions<FormOptions>,
  },
  data() {
    return {
      id: "",
      form: {},
      service: {},
    };
  },
  methods: {
    update() {
      this.service.create({
        object: this.form,
      });
    },
  },
  watch: {
    resourceName() {
      this.service = createSimpleCRUD(this.resourceName);
    },
  },
  mounted() {
    console.log(this.resourceName);
    this.service = createSimpleCRUD(this.resourceName);
    console.log("CreatePageComponent", this);
  },
});
</script>
