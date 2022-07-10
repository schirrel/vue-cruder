<template>
  <main>
    Create Page with {{ resourceName }}
    <Form
      v-if="service"
      :service="service"
      :options="formOptions"
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
      service: createSimpleCRUD(this.resourceName),
    };
  },
  methods: {
    update() {
      this.service.create({
        object: this.form,
      });
    },
  },
  mounted() {
    console.log("CreatePageComponent", this);
  },
});
</script>
