<template>
  <div class="vue-cruder__field--input">
    <label class="vue-cruder__field--input__label" v-if="label">{{ label }}</label>
    <input class="vue-cruder__field--input__input" v-on="listeners" v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  name: "Input",
  props: {
    label: {
      type: String,
      required: false,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.vue-cruder__field--input {
  display: inline-block;

  &__label {
    display: block;
  }
}
</style>
