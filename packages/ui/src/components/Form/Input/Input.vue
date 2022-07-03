<template>
  <label class="mdc-text-field mdc-text-field--filled">
    <span class="mdc-text-field__ripple"></span>
    <span v-if="label" class="mdc-floating-label" id="my-label">{{
      label
    }}</span>
    <input
      type="text"
      class="mdc-text-field__input"
      aria-labelledby="my-label"
      v-bind="{ ...$props, ...$attrs }"
      :value="value"
      @input="update"
    />
    <span class="mdc-line-ripple"></span>
  </label>
</template>

<script>
export default {
  props: {
    value: {},
    label: {
      type: String,
    },
  },
  methods: {
    update(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field.scss";
</style>