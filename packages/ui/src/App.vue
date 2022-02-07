<template>
  <div id="app">
    <details class="collapse">
      <summary class="title">Normal List</summary>
      <div class="description">
        <List v-if="service" :service="service" :headers="headers" />
      </div>
    </details>

    <details class="collapse">
      <summary class="title">With actions</summary>
      <div class="description">
        <details class="collapse">
          <summary class="title">With Custom Action</summary>
          <div class="description">
            <List
              v-if="service"
              :service="service"
              :headers="headers"
              :actions="actions"
            />
          </div>
        </details>
        <details class="collapse">
          <summary class="title">
            With Custom Action and Actions Condensed
          </summary>
          <div class="description">
            Prop <code> actions-condensed </code><br />

            <List
              v-if="service"
              :service="service"
              :headers="headers"
              :actions="actions"
              actions-condensed
            />
          </div>
        </details>
        <details class="collapse">
          <summary class="title">With CRUD Action</summary>
          <div class="description">
            Prop <code> use-crud-actions </code> <br />
            <List
              v-if="service"
              :service="service"
              :headers="headers"
              use-crud-actions
            />
          </div>
        </details>
        <details class="collapse">
          <summary class="title">
            With CRUD Action and Actions condensed
          </summary>
          <div class="description">
            Prop <code> use-crud-actions </code> and
            <code>actions-condensed</code><br />
            <List
              v-if="service"
              :service="service"
              :headers="headers"
              use-crud-actions
              actions-condensed
            />
          </div>
        </details>
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createSimpleCRUD } from "@vue-cruder/core";
import List from "@/components/List/List.vue";

export default Vue.extend({
  name: "App",
  components: {
    List,
  },
  data: () => ({
    service: null,

    headers: [
      {
        text: "Name",
        key: "name",
      },
      {
        text: "Email",
        key: "email",
      },
      {
        text: "Phone",
        key: "phone",
      },
      {
        text: "Website",
        key: "website",
      },
    ],
    actions: [
      {
        type: "send",
        text: "Send",
        callback: (row) => {
          console.log("send", row);
        },
      },
      {
        type: "cancel",
        text: "Cancel",
        callback: (row) => {
          console.log("cancel", row);
        },
      },
    ],
  }),
  mounted() {
    this.service = createSimpleCRUD({
      baseURL: "https://jsonplaceholder.typicode.com/users",
      /**
       * Any auth stuff goes here
       */
    });
  },
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
</style>
