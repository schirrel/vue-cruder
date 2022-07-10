<template>
  <main>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <Form
      :key="resource"
      v-if="service"
      :service="service"
      :options="options"
    >
    </Form>
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
    resource: {
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
      service: null,
    };
  },
  watch: {
    resource() {
      this.service = createSimpleCRUD(this.resource);
    },
  },
  mounted() {
    this.service = createSimpleCRUD(this.resource);
  },
  computed: {
    options() {
      return { ...this.formOptions, submit: this.create };
    },
  },
  methods: {
    create(models) {
      this.service.create(models);
    },
  },
});
</script>
