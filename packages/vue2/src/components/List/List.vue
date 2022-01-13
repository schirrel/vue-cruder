<template>
  <div>
    <dl class="vue-cruder__list" :key="row.id" v-for="row in items">
      <template v-for="header in headers">
        <dt :key="header.key">{{ header.text }}</dt>
        <dd :key="header.name">{{ getValue(row, header.key) }}</dd>
      </template>
      <template v-if="actions">
        <dt>Ações</dt>
        <dd class="vue-cruder__list--actions">
          <ol>
            <li v-for="action in actions" :key="action.type">
              <button @click="action.callback(row)">
                {{ action.text }}
              </button>
            </li>
          </ol>
        </dd>
      </template>
    </dl>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "List",
  props: {
    headers: {},
    service: {},
    actions: {
      type: Array,
      default: () => null,
    },
  },
  data: () => ({
    items: [],
  }),
  computed: {
    columns() {
      return null;
    },
  },
  async mounted() {
    if (this.service) {
      const response = await this.service.list();
      this.items = response.data;
    }
    console.dir(this.actions);
  },
  methods: {
    getValue(column, header) {
      return column[header];
    },
  },
});
</script>

<style lang="scss">
.vue-cruder__list {
  width: 100%;
  margin: 0;
}

.vue-cruder__list dt {
  font-weight: bold;
  padding: 4px 0;
}
@media (max-width: 763px) {
  dl.vue-cruder__list {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    width: 100%; /* set the container width*/
    overflow: visible;
    margin-bottom: 10px;
    border-bottom: 1px solid silver;
  }
  dl.vue-cruder__list dt {
    flex: 0 0 50%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  dl.vue-cruder__list dd {
    flex: 0 0 50%;
    margin-left: auto;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
@media (min-width: 764px) {
  .vue-cruder__list {
    width: 100%;
    display: grid;
    grid-template-rows: auto auto;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    margin: 0;
  }

  .vue-cruder__list:not(:first-of-type) dt {
    opacity: 0;
    font-size: 0;
  }

  .vue-cruder__list dd {
    padding: 0;
    margin: 0;
  }

  .vue-cruder__list dd {
    padding: 0;
    margin: 0;
  }
}

.vue-cruder__list--actions ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
