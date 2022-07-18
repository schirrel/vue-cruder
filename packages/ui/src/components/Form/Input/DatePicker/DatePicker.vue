<template>
  <div class="mdc-dialog">
    <div class="mdc-dialog__container">
      <div
        class="mdc-dialog__surface"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="my-dialog-title"
        aria-describedby="my-dialog-content"
      >
        <div class="mdc-dialog__content" id="my-dialog-content">
          <div class="vue-cruder__date-picker">
            <div>
              <i
                class="material-icons"
                tabindex="0"
                role="button"
                @click="increase('day')"
                >arrow_drop_up</i
              >
            </div>
            <div>
              <i
                class="material-icons"
                tabindex="0"
                role="button"
                @click="increase('month')"
                >arrow_drop_up</i
              >
            </div>
            <div>
              <i
                class="material-icons"
                tabindex="0"
                role="button"
                @click="increase('year')"
                >arrow_drop_up</i
              >
            </div>
            <label
              class="
                mdc-text-field mdc-text-field--outlined mdc-text-field--no-label
              "
            >
              <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="number"
                id="day"
                v-model="day"
                :min="minDay"
                :max="maxDay"
                max-length="2"
                step="1"
                class="mdc-text-field__input"
              />
            </label>

            <label
              class="
                mdc-text-field mdc-text-field--outlined mdc-text-field--no-label
              "
            >
              <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="number"
                id="month"
                v-model="month"
                :min="minMonth"
                max-length="2"
                :max="12"
                step="1"
                class="mdc-text-field__input"
              />
            </label>

            <label
              class="
                mdc-text-field mdc-text-field--outlined mdc-text-field--no-label
              "
            >
              <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="number"
                id="year"
                v-model="year"
                step="1"
                max-length="4"
                min-length="4"
                class="mdc-text-field__input"
              />
            </label>

            <div>
              <i
                class="material-icons"
                tabindex="0"
                role="button"
                @click="decrease('day')"
                >arrow_drop_down</i
              >
            </div>
            <div>
              <i
                class="material-icons"
                tabindex="0"
                role="button"
                @click="decrease('month')"
                >arrow_drop_down</i
              >
            </div>
            <div>
              <i
                class="material-icons"
                tabindex="0"
                role="button"
                @click="decrease('year')"
                >arrow_drop_down</i
              >
            </div>
          </div>
        </div>
        <div class="mdc-dialog__actions">
          <button
            type="button"
            class="mdc-button mdc-dialog__button"
            data-mdc-dialog-action="close"
          >
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Fechar</span>
          </button>
          <button
            type="button"
            class="mdc-button mdc-dialog__button"
            data-mdc-dialog-action="save"
          >
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">Salvar</span>
          </button>
        </div>
      </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
  </div>
</template>

<script lang="ts">
type InputType = "day" | "month" | "year";

import Vue from "vue";
import { MDCDialog } from "@material/dialog";
export default Vue.extend({
  name: "VueCruderDatePicker",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      day: 0,
      month: 0,
      year: 0,
      dialog: null,
    };
  },
  watch: {
    open() {
      if (this.open) {
        this.dialog?.open();
      }
    },
    month() {
      this.adjustDay();
    },
  },
  computed: {
    today() {
      const date = new Date();
      return {
        day: date.getDate(),
        year: date.getFullYear(),
        month: date.getMonth() + 1,
      };
    },
    currentDay() {
      return this.today.day === this.day;
    },
    currentMonth() {
      return this.today.month === this.month;
    },
    currentYear() {
      return this.today.year === this.year;
    },
    minDay() {
      return 1;
    },
    maxDay() {
      return this.getMaxDay();
    },
    minMonth() {
      return this.currentYear ? this.today.month : 1;
    },
  },
  mounted() {
    this.dialog = new MDCDialog(this.$el);
    this.dialog.listen("MDCDialog:closing", (event) => {
      this.$emit(
        event.detail?.action === "save" ? "set" : "close",
        // new Date(this.year, this.month--, this.day)
        `${this.year}-${this.format(this.month)}-${this.format(this.day)}`
      );
    });
    this.year = this.today.year;
    this.month = this.today.month;
    this.day = this.today.day;
  },
  methods: {
    format(value) {
      const _value = parseInt(value);
      return `${_value < 10 ? "0" : ""}${_value}`;
    },
    increase(type: InputType) {
      let parsed = parseInt(this[type]);
      if (type === "year") {
        parsed++;
      } else if (type === "day") {
        parsed = parsed < this.maxDay ? parsed + 1 : this.maxDay;
      } else {
        parsed = parsed < 12 ? parsed + 1 : 12;
      }

      this[type] = parsed;
    },
    decrease(type: InputType) {
      let parsed = parseInt(this[type]);
      parsed > 1 && parsed--;
      this[type] = parsed;
    },
    getMaxDay() {
      const date = new Date(this.year, parseInt(this.month), 0);
      return date.getDate();
    },
    adjustDay() {
      if (this.day > this.getMaxDay()) {
        this.day = this.getMaxDay();
      }
    },
  },
});
</script>


<style lang="scss">
@import "@material/dialog/mdc-dialog.scss";

.vue-cruder__date-picker {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px 40px;
  justify-items: center;
  align-content: center;
}
.vue-cruder__date-picker .material-icons {
  font-size: 64px;
  cursor: pointer;
}
.vue-cruder__date-picker .material-icons:hover {
  color: cornflowerblue;
}
</style>
