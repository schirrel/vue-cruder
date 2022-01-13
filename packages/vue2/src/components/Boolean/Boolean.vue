<template>
  <div class="vue-cruder__field--checkbox">
    <label class="vue-cruder__field--checkbox__label" v-if="label">
      {{ label }}</label
    >
    <input
      type="checkbox"
      class="vue-cruder__field--checkbox__checkbox"
      v-on="$listeners"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Boolean",
  props: {
    label: {
      type: String,
      required: false,
    },
  },
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
