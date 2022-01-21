<template>
  <form class="vue-cruder__form" :ref="name" v-on:submit="submit">
    <component :is="title ? 'fieldset' : 'div'">
      <legend v-if="title">{{ title }}</legend>
      <span v-show="loading"> Loading </span>
      <template v-for="field of mountedFields">
        <component
          :key="field.id"
          :is="field.component"
          v-bind="field.properties"
          v-model="models[field.id]"
          @input="updateValue($event, field)"
        ></component>
      </template>
      <mwc-button @click="formSubmit" raised label="Submit"></mwc-button>
    </component>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import {
  createFieldComponent,
  createFormResultFields,
  getFieldValue,
} from "@/services/form";
import "@material/mwc-button";
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
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    mountedFields: [],
    loading: false,
    models: {},
  }),
  methods: {
    async submit($event) {
      $event.preventDefault();

      console.log(this.models);
      // console.dir();
      // const resultModel = createFormResultFields(
      //   this.fields,
      //   this.$refs[this.name]
      // );
      const resultModel = this.models;
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
    formSubmit($event) {
      $event.preventDefault();
      this.$refs[this.name].requestSubmit();
    },
    updateValue($event, field) {
      console.log($event.target.value);
      console.log(getFieldValue(field.properties, $event.target));
      this.models[field.properties.id] = getFieldValue(
        field.properties,
        $event.target
      );
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
