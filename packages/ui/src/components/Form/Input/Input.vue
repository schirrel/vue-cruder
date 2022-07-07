<template>
  <label class="mdc-text-field mdc-text-field--filled">
    <span class="mdc-text-field__ripple"></span>
    <span
      v-if="label"
      class="mdc-floating-label mdc-floating-label--float-above"
      >{{ label }}</span
    >
    <input
      class="mdc-text-field__input"
      aria-labelledby="my-label"
      v-bind="{ ...$props, ...$attrs, ...computedProps }"
      :value="value"
      @input="update"
    />
    <span class="mdc-line-ripple"></span>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {},
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    id: {
      type: String,
      required: true,
    },
    validations: {
      type: Array,
    },
    validation: {
      type: Function,
    },
    disabledValidation: {
      type: Function,
    },
  },
  computed: {
    computedProps() {
      return {
        name: this.id,
        "data-testid": this.id,
      };
    },
  },
  methods: {
    update(event) {
      this.$emit("input", event.target.value);
    },
  },
});
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field.scss";
</style>
