<template>
  <p
    class="vue-cruder__list-column--editable"
    ref="editable"
    v-bind:contenteditable="editable"
    v-on="listeners"
    @keydown.enter="onEdit"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: {
      default: "",
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },
  mounted() {
    if (this.$refs.editable) this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target?.innerText);
    },
    onEdit(e) {
      this.$emit("edit", e.target?.innerText);
    },
  },
});
</script>

<style lang="scss">
.vue-cruder__list-column--editable {
  padding: 4px 8px;
}
.vue-cruder__list-column--editable[contenteditable="true"] {
  background: #f2f2f2;
  outline: 1px solid silver;
  border-radius: 2px;
}
</style>
