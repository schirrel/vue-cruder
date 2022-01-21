<template>
  <div class="vue-cruder__field--input">
    <!-- <label class="vue-cruder__field--input__label" v-if="label">
      {{ label }}</label
    >
    <input
      class="vue-cruder__field--input__input"
      v-on="$listeners"
      v-bind="$attrs"
    /> -->
    <mwc-textfield
      v-on="$listeners"
      v-bind="$attrs"
      :label="label"
      @input="input"
      :value="value"
    ></mwc-textfield>
  </div>
</template>

<script lang="ts">
import "@material/mwc-textfield";

import Vue from "vue";

export default Vue.extend({
  name: "Input",
  props: {
    label: {
      type: String,
      required: false,
    },
    input: {},
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    inputListner(event) {
      this.value = event.target.value;
    },
  },
});
</script>

<style lang="scss" scoped>
.vue-cruder__field--input {
  display: block;

  &__label {
    display: block;
  }
}
</style>
