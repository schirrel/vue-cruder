<template>
  <div id="app">
    <h1>Playground</h1>
    <h2>General</h2>
    <div class="description">
      <p>Type</p>
      <div class="horizontal">
        <Button @click="model = 'click'"> Button </Button>
        <Button type="submit" @click="model = 'click'"> Submit </Button>
        <Button type="reset" @click="model = 'click'"> Reset </Button>
      </div>
      <p>Variant</p>
      <div class="horizontal">
        <Button @click="model = 'click'"> Default </Button>

        <Button variant="text" @click="model = 'click'"> Text </Button>

        <Button variant="outlined" @click="model = 'click'"> Outlined </Button>

        <Button variant="contained" @click="model = 'click'">
          contained
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Button } from "@vue-cruder/ui";
export default Vue.extend({
  name: "App",
  components: {
    Button,
  },
  data: () => ({}),
});
</script>

<style lang="scss">
/* From @felipefialho */
:root {
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space: 24px;
  --space-md: 32px;
  --space-lg: 48px;
  --space-xlg: 64px;
}

body {
  background-color: var(--background);
  color: var(--text-color);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

details {
  summary {
    list-style: none;
  }
}

.collapse {
  border: solid 1px var(--gray-lighter);
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  margin-left: auto;
  margin-right: auto;
  max-width: 90vw;
  transition: background-color 0.25s;
  will-change: background-color;

  &:first-child {
    margin-top: var(--space);
  }

  &:not(:last-child) {
    margin-bottom: var(--space-sm);
  }

  &:hover {
    background-color: var(--gray-lighter);
  }
}

.title {
  cursor: pointer;
  font-weight: 600;
  padding: var(--space-sm);
  position: relative;
}

.description {
  border-top: var(--gray-light) solid 1px;
  font-size: 14px;
  line-height: 21px;
  padding: var(--space-sm);
}

.horizontal {
  gap: 8px;
  display: flex;
}
</style>
