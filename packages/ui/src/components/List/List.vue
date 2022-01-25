<template>
  <!-- <div>
    <dl class="vue-cruder__list" :key="row.id" v-for="row in items">
      <template v-for="header in headers">
        <dt :key="header.key">{{ header.text }}</dt>
        <dd
          :class="[
            'vue-cruder__list__value',
            { 'vue-cruder__list__value--editable': row.editable },
          ]"
          :value="row[header.key]"
          :key="header.name"
        >
          <Editable @onEdit="finishEdit(row)" :editable="row.editable" v-model="row[header.key]" />

        </dd>
      </template>
      <template v-if="listActions.length">
        <dt>Ações</dt>
        <dd class="vue-cruder__list--actions">
          <ol>
            <li v-if="row.editable">
              <button @click="finishEdit(row)">Save Edit</button>
            </li>
            <li v-else v-for="action in listActions" :key="action.type">
              <button @click="action.callback(row)">{{ action.text }}</button>
            </li>
          </ol>
        </dd>
      </template>
    </dl>
  </div>-->
  <div class="mdc-data-table">
    <div class="mdc-data-table__table-container">
      <table class="mdc-data-table__table" aria-label="Dessert calories">
        <thead>
          <tr class="mdc-data-table__header-row">
            <th
              class="mdc-data-table__header-cell"
              v-for="header in headers"
              role="columnheader"
              :key="header.key"
            >{{ header.text }}</th>
          </tr>
        </thead>
        <tbody class="mdc-data-table__content">
          <tr class="mdc-data-table__row" v-for="row in items" :key="row">
            <td class="mdc-data-table__cell" v-for="header in headers" :key="header.key">
              {{
                row[header.key]
              }}
            </td>
            <!-- <th class="mdc-data-table__cell" scope="row">Frozen yogurt</th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
            <td class="mdc-data-table__cell">Super tasty</td>-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { SimpleCRUD } from "@vue-cruder/core";
import { MDCDataTable } from '@material/data-table';
import { ListHeader } from "../models";

// import Editable from "./Editable/Editable.vue";
export default Vue.extend({
  name: "List",
  // components: { Editable },
  props: {
    headers: {
      type: Array,
      required: true
    } as PropOptions<ListHeader[]>,
    service: {
      type: Object,
      required: true
    } as PropOptions<SimpleCRUD>,
    actions: {
      type: Array,
      default: () => null,
    },
    useCrudActions: Boolean,
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    listActions() {
      return (this.useCrudActions ? this.crudActions : this.actions) || [];
    },
    crudActions() {
      return [
        {
          type: "edit",
          text: "Edit",
          callback: this.editRow,
        },

        {
          type: "delete",
          text: "Delete",
          callback: this.deleteRow,
        },
      ];
    },
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },
  async mounted() {
    if (this.service && this.service.list) {
      console.dir(this.service)
      const response = await this.service?.list();
      this.items = response.data;
    }

    if (this.useCrudActions && !this.service)
      throw new Error("useCrudActions requires a service");


    new MDCDataTable(this.$el)
  },
  methods: {
    getValue(column, header) {
      return column[header];
    },
    async deleteRow(row) {
      if (this.service) {
        this.loading = true;
        try {
          await this.service.delete(row.id);
        } catch (err) {
          // eslint-disable-next-line
          console.log(err);
        } finally {
          this.loading = false;
        }
        return this.loading;
      }
    },
    editRow(row) {
      row.editable = true;
      this.$forceUpdate();
      // if (this.service) {
      //   await this.service.update(row.id, row);
      // }
    },
    finishEdit(row) {
      row.editable = false;
      this.$forceUpdate();
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
.vue-cruder__list__value--editable {
  border: 1px solid orange;
}
</style>

<style lang="scss">
@import "@material/data-table/mdc-data-table";
</style>