<template>
  <main>
    <LoadingLayer v-if="loading" />

    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <Form :key="resource" :options="options" />
  </main>
</template>

<script lang="ts">
import { createSimpleCRUD } from "@vue-cruder/core";
import { Form, LoadingLayer } from "../../components";
import Vue, { PropOptions } from "vue";
import { FormOptions, PageProps } from "../../builders/models";

export default Vue.extend({
  name: "CreatePageComponent",
  components: { Form, LoadingLayer },
  props: {
    page: {
      type: Object,
      required: true,
    } as PropOptions<PageProps>,
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
      loading: false,
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
      return {
        ...this.formOptions,
        submit: this.create,
        onSubmit: this.create,
      };
    },
  },
  methods: {
    create(models: any) {
      this.loading = true;
      try {
        this.service.create(models);
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    },
  },
});
</script>
