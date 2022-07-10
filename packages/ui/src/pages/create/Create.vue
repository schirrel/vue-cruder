<template>
  <main>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <Form
      :key="resourceName"
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
      service: null,
    };
  },
  watch: {
    resourceName(oldValue, newbValue) {
      console.log("resourceName", oldValue, newbValue);
      this.service = createSimpleCRUD(this.resourceName);
    },
    service(oldValue, newbValue) {
      console.log("service", oldValue, newbValue);
    },
  },
  mounted() {
    console.log(this.resourceName);
    this.service = createSimpleCRUD(this.resourceName);
  },
  computed: {
    options() {
      return { ...this.formOptions, submit: this.create };
    },
  },
  methods: {
    create(models) {
      console.log("create");
      console.log(this.resourceName);
      console.log(this.service);
      this.service.create(models);
    },
  },
});
</script>
