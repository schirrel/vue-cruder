<template>
  <button
    :type="type"
    class="mdc-button mdc-button--raised"
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
  >
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__touch"></span>
    <span class="mdc-button__label">
      <slot />
    </span>
  </button>
</template>

<script>
import Vue from "vue";
import { MDCRipple } from "@material/ripple";

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
  mounted() {
    new MDCRipple(this.$el);
  },
});
</script>

<style lang="scss">
@import "@material/button/mdc-button.scss";
</style>
