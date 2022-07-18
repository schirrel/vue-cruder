<template>
  <Fragment>
    <label
      :class="[
        'mdc-text-field mdc-text-field--filled',
        {
          'mdc-text-field--with-trailing-icon': type === 'date',
        },
      ]"
    >
      <span class="mdc-text-field__ripple"></span>
      <span
        v-if="label"
        class="mdc-floating-label mdc-floating-label--float-above"
        >{{ label }}</span
      >

      <input
        class="mdc-text-field__input"
        aria-labelledby="my-label"
        v-bind="{ ...$props, ...$attrs, ...computedProps }"
        :value="value"
        @input="update"
      />
      <i
        v-if="type === 'date'"
        class="
          material-icons
          mdc-text-field__icon mdc-text-field__icon--trailing
        "
        tabindex="0"
        role="button"
        @click="openDatePicker = true"
        >event</i
      >

      <span class="mdc-line-ripple"></span>
    </label>
    <DatePicker
      :open="openDatePicker"
      @close="openDatePicker = false"
      @set="setValue"
    />
  </Fragment>
</template>

<script lang="ts">
import Vue from "vue";
import { Fragment } from "vue-fragment";
import DatePicker from "./DatePicker";
export default Vue.extend({
  name: "VueCruderInput",
  components: { Fragment, DatePicker },
  data() {
    return {
      openDatePicker: false,
    };
  },
  props: {
    value: {},
    label: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    id: {
      type: String,
      required: true,
    },
    validations: {
      type: Array,
    },
    validation: {
      type: Function,
    },
    disabledValidation: {
      type: Function,
    },
  },
  computed: {
    computedProps() {
      return {
        name: this.id,
        "data-testid": this.id,
      };
    },
  },
  methods: {
    update(event) {
      this.$emit("input", event.target.value);
    },
    setValue(val) {
      this.openDatePicker = false;
      this.$emit("input", val);
    },
  },
});
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field.scss";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
