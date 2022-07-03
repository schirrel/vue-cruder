<template>
  <form class="vue-cruder__form"  @submit.prevent="submit">
    <div class="mdc-card">
      <div class="mdc-card__content">
        <slot />
      </div>
      <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
          <button class="mdc-button mdc-card__action mdc-card__action--button">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Action 1</span>
          </button>
          <button class="mdc-button mdc-card__action mdc-card__action--button">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Action 2</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { SimpleCRUD } from "@vue-cruder/core";

export default Vue.extend({
  name: "List",
  props: {
    service: {
      type: Object,
      required: true,
    } as PropOptions<SimpleCRUD>,
    title: { type: String },
  },
  data() {
    return {};
  },
  methods: {
    submit() {
      console.log("hehe");
    },
  },
});
</script>

<style lang="scss">
@import "@material/card/mdc-card.scss";
.vue-cruder__form {
  width: 100%;
}
</style>
