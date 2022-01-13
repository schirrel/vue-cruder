<template>
  <div class="vue-crud__field--input">
    <label class="vue-crud__field--input__label" v-if="label">
      {{ label }}</label
    >
    <input
      class="vue-crud__field--input__input"
      v-on="$listeners"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-crud__field--input {
  display: inline-block;

  &__label {
    display: block;
  }
}
</style>
