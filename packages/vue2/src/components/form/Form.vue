<template>
  <form ref="form" v-on:submit="submit">
    <component :is="title ? 'fieldset' : 'div'">
      <legend v-if="title">{{ title }}</legend>
      <span v-show="loading"> Loading </span>
      <template v-for="field of mountedFields">
        <component
          :key="field.id"
          :is="field.component"
          v-bind="field.properties"
        ></component>
      </template>
      <button>Submit</button>
    </component>
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
    service: {},
    title: {
      type: String,
    },
  },
  data: () => ({
    mountedFields: [],
    loading: false,
  }),
  methods: {
    async submit($event) {
      $event.preventDefault();
      const resultModel = {};
      this.fields.forEach((field) => {
        const fieldValue = this.$refs.form.elements.namedItem(field.id).value;
        if (field.required || fieldValue) {
          resultModel[field.id] = fieldValue;
        }
      });
      console.log(this.service);
      if (this.service && this.service.create) {
        try {
          this.loading = true;
          await this.service.create(resultModel);
        } catch (err) {
          return this.$emit("error", err);
        } finally {
          this.loading = false;
        }
      }

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
