<template>
  <p
    ref="editable"
    v-bind:contenteditable="editable"
    v-on="listeners"
    @keydown.enter="onEdit"
  />
</template>

<script>
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
