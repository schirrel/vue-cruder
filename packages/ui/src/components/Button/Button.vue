<template>
  <button
    :type="type"
    :class="`mdc-button mdc-button${cssClass}`"
    @click="$emit('click')"
  >
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__touch"></span>
    <span class="mdc-button__label">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { MDCRipple } from "@material/ripple";

type VariantOptions = "contained" | "text" | "outlined";
type TypeOptions = "button" | "submit" | "reset";

export default Vue.extend({
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    } as PropOptions<TypeOptions>,
    variant: {
      type: String,
      default: "contained",
    } as PropOptions<VariantOptions>,
  },
  computed: {
    cssClass() {
      switch (this.variant) {
        case "contained":
          return "--raised";
        case "text":
          return "";
        case "outlined":
          return "--outlined";
        default:
          return "";
      }
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
