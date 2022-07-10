<template>
  <form class="vue-cruder__form" @submit.prevent="submit">
    <div class="mdc-card">
      <header class="vue-cruder__form__title" v-if="options.title">
        {{ options.title }}
      </header>
      <div class="mdc-card__content vue-cruder__form__content" v-if="form">
        <template v-for="field of form.fields">
          <component
            :key="field.options.id"
            :is="field.component"
            v-bind="field.options"
            v-model="models[field.options.id]"
          />
        </template>
      </div>
      <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
          <button
            class="mdc-button mdc-card__action mdc-card__action--button"
            type="button"
            @click="cancel"
          >
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Desistir</span>
          </button>
          <button class="mdc-button mdc-card__action mdc-card__action--button">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Salvar</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { SimpleCRUD } from "@vue-cruder/core";
import { FormOptions } from "../../builders/models";
import { formBuilder } from "../../builders/form";

export default Vue.extend({
  name: "List",
  props: {
    service: {
      type: Object,
      required: true,
    } as PropOptions<SimpleCRUD>,
    options: {
      type: Object,
      required: true,
    } as PropOptions<FormOptions>,
  },
  data() {
    return {
      form: null,
      models: {},
    };
  },
  watch: {
    options() {
      this.form = formBuilder(this.options);
    },
  },
  methods: {
    async submit() {
      if (this.options.onSubmit) {
        return this.options.onSubmit(this.models);
      }
      try {
        const response = await this.service.create(this.models);
        this.options?.onSuccess?.(response);
      } catch (err) {
        this.options?.onError?.(err);
      }
    },
    cancel() {
      this.options?.onCancel();
    },
  },
  mounted() {
    this.form = formBuilder(this.options);
  },
});
</script>

<style lang="scss">
@import "@material/card/mdc-card.scss";
.vue-cruder__form {
  width: 100%;

  &__title {
    font-weight: 700;
    font-size: 18px;
    padding: 12px 8px;
  }
}
.vue-cruder__form__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
