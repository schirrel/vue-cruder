<template>
  <!-- <p
    class="vue-cruder__list-column--editable"
    ref="editable"
    v-bind:contenteditable="editable"
    v-on="listeners"
    @keydown.enter="onEdit"
  /> -->
  <label
    class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label"
  >
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading"></span>
      <span class="mdc-notched-outline__trailing"></span>
    </span>
    <input
      class="mdc-text-field__input"
      type="text"
      aria-label="Label"
      :value="value"
      @change="onInput"
    />
  </label>
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
  watch: {
    value() {},
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

<style scoped>
.vue-cruder__list-column--editable[contenteditable="true"] {
  background: #cecece;
}
</style>