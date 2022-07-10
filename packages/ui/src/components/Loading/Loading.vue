<template>
  <div
    class="mdc-circular-progress mdc-circular-progress--indeterminate"
    style="width: 48px; height: 48px"
    role="progressbar"
    aria-label="Progress"
    aria-valuemin="0"
    aria-valuemax="1"
  >
    <div class="mdc-circular-progress__determinate-container">
      <svg
        class="mdc-circular-progress__determinate-circle-graphic"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="mdc-circular-progress__determinate-track"
          cx="12"
          cy="12"
          r="8.75"
          stroke-width="2.5"
        />
        <circle
          class="mdc-circular-progress__determinate-circle"
          cx="12"
          cy="12"
          r="8.75"
          stroke-dasharray="54.978"
          stroke-dashoffset="54.978"
          stroke-width="2.5"
        />
      </svg>
    </div>
    <div class="mdc-circular-progress__indeterminate-container">
      <div class="mdc-circular-progress__spinner-layer">
        <div
          class="
            mdc-circular-progress__circle-clipper
            mdc-circular-progress__circle-left
          "
        >
          <svg
            class="mdc-circular-progress__indeterminate-circle-graphic"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="8.75"
              stroke-dasharray="54.978"
              stroke-dashoffset="27.489"
              stroke-width="2.5"
            />
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg
            class="mdc-circular-progress__indeterminate-circle-graphic"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="8.75"
              stroke-dasharray="54.978"
              stroke-dashoffset="27.489"
              stroke-width="2"
            />
          </svg>
        </div>
        <div
          class="
            mdc-circular-progress__circle-clipper
            mdc-circular-progress__circle-right
          "
        >
          <svg
            class="mdc-circular-progress__indeterminate-circle-graphic"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="8.75"
              stroke-dasharray="54.978"
              stroke-dashoffset="27.489"
              stroke-width="2.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loading",
});
</script>


<style lang="scss">
@import "@material/circular-progress/mdc-circular-progress.scss";
</style>