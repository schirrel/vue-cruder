<template>
  <form ref="form" v-on:submit="submit">
    <template v-for="field of mountedFields">
      <component
        :key="field.id"
        :is="field.component"
        v-bind="field.properties"
      ></component>
    </template>
    <button>Submit</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { createFieldComponent } from "@/services/form";

export default Vue.extend({
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    mountedFields: [],
  }),
  methods: {
    submit($event) {
      $event.preventDefault();
      const resultModel = {};
      this.fields.forEach((field) => {
        const fieldValue = this.$refs.form.elements.namedItem(field.id).value;
        if (field.required || fieldValue) {
          resultModel[field.id] = fieldValue;
        }
      });
      this.$emit("submit", resultModel);
    },
  },
  mounted() {
    this.fields.forEach((each) => {
      this.mountedFields.push(createFieldComponent(each));
    });
  },
});
</script>

<style></style>
