<template>
  <!-- <form class="vue-cruder__form" :ref="name" v-on:submit="submit">
    <component :is="title ? 'fieldset' : 'div'">
      <legend v-if="title">{{ title }}</legend>
  <span v-show="loading">Loading</span>-->
  <!-- <template v-for="field of mountedFields">
        <component
          :key="field.id"
          :is="field.component"
          v-bind="field.properties"
          v-model="models[field.id]"
          @input="updateValue($event, field)"
        ></component>
  </template>-->
  <section>
    <dynamic-form
      :id="name"
      :fields="fields"
      @submitted="submit"
      @error="errors"
      @change="updateValues"
    />
    <!-- <button submit="true" :form="name">Submit</button> -->

    <mwc-button @click="fakeSubmit" raised label="Submit"></mwc-button>
  </section>
  <!-- </component> -->
  <!-- </form> -->
</template>

<script lang="ts">
import Vue from "vue";
import { DynamicForm } from '@asigloo/vue-dynamic-forms';

import {
  createFieldComponent,
  createFormResultFields,
  getFieldValue,
} from "@/services/form";
import "@material/mwc-button";
export default Vue.extend({
  components: { DynamicForm },
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
    submit(models) {
      debugger
      console.log(models)
      this.$emit("submit", models);
    },

    errors(errors) {
      console.log(errors)
      this.$emit("error", errors);
    },
    updateValues(values) {
      this.models = values
    },
    fakeSubmit() {

      this.$emit("submit", this.models);
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
