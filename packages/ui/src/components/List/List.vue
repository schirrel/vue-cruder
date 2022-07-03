<template>
  <div class="mdc-data-table">
    <div class="mdc-data-table__table-container">
      <table class="mdc-data-table__table">
        <thead>
          <tr class="mdc-data-table__header-row">
            <th
              class="mdc-data-table__header-cell"
              v-for="header in headers"
              role="columnheader"
              :key="header.key"
              scope="col"
            >
              {{ header.text }}
            </th>
            <th
              role="columnheader"
              class="mdc-data-table__header-cell"
              v-if="listActions.length"
              scope="col"
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody class="mdc-data-table__content">
          <tr class="mdc-data-table__row" v-for="row in items" :key="row.id">
            <td
              class="mdc-data-table__cell"
              scope="row"
              v-for="header in headers"
              :key="header.key"
            >
              <Editable
                @onEdit="finishEdit(row)"
                :editable="row.editable"
                v-model="row[header.key]"
              />
            </td>
            <td
              v-if="listActions.length"
              class="mdc-data-table__cell vue-cruder__list--actions"
            >
              <template v-if="actionsCondensed">
                <div id="demo-menu" class="mdc-menu-surface--anchor">
                  <button
                    type="button"
                    class="mdc-button"
                    id="menu-button"
                    @click="toggleMenu($event)"
                  >
                    Open Menu
                  </button>
                  <div
                    class="mdc-menu mdc-menu-surface mdc-menu-surface--fixed"
                  >
                    <ul class="mdc-list" role="menu" aria-hidden="true">
                      <li
                        @click="action.callback(row)"
                        class="mdc-list-item mdc-ripple-upgraded"
                        role="menuitem"
                        tabindex="-1"
                        v-for="action in listActions"
                        :key="action.type"
                      >
                        {{ action.text }}
                      </li>
                    </ul>
                  </div>
                </div>
              </template>

              <ul class="simple-actions" v-else>
                <li v-if="row.editable">
                  <div class="mdc-touch-target-wrapper">
                    <button
                      type="button"
                      class="mdc-button mdc-button--raised"
                      @click="finishEdit(row)"
                    >
                      <span class="mdc-button__ripple"></span>
                      <span class="mdc-button__touch"></span>
                      <span class="mdc-button__label">Save Edit</span>
                    </button>
                  </div>
                </li>
                <li v-else v-for="action in listActions" :key="action.type">
                  <div class="mdc-touch-target-wrapper">
                    <button
                      type="button"
                      class="mdc-button mdc-button--raised"
                      @click="action.callback(row)"
                    >
                      <span class="mdc-button__ripple"></span>
                      <span class="mdc-button__touch"></span>
                      <span class="mdc-button__label"> {{ action.text }}</span>
                    </button>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { SimpleCRUD } from "@vue-cruder/core";
import { MDCDataTable } from "@material/data-table";
import { MDCRipple } from "@material/ripple";
import { MDCMenu } from "@material/menu";
import { MDCList } from "@material/list";

import { ListHeader } from "./models";

import Editable from "./Editable/Editable.vue";
export default Vue.extend({
  name: "List",
  components: { Editable },
  props: {
    headers: {
      type: Array,
      required: true,
    } as PropOptions<ListHeader[]>,
    service: {
      type: Object,
      required: true,
    } as PropOptions<SimpleCRUD>,
    actions: {
      type: Array,
      default: () => null,
    },
    useCrudActions: Boolean,
    actionsCondensed: Boolean,
  },
  data() {
    return {
      items: [],
      table: null,
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
    if (this.service && this.service.read) {
      const response = await this.service?.read();
      this.items = response.data;
    }

    if (this.useCrudActions && !this.service)
      throw new Error("useCrudActions requires a service");

    this.initElements();
  },
  methods: {
    initElements() {
      // this.table = new MDCDataTable(this.$el);
      Array.from(document.querySelectorAll(".mdc-button")).forEach((each) => {
        new MDCRipple(each);
      });
      Array.from(document.querySelectorAll(".mdc-menu")).forEach((each) => {
        new MDCMenu(each);
      });
      Array.from(document.querySelectorAll(".mdc-list")).forEach((each) => {
        new MDCList(each);
      });
    },
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
    toggleMenu(event) {
      const menu = new MDCMenu(event.target.nextSibling);
      menu.open = !menu.open;
    },
  },
});
</script>

<style lang="scss">
@import "@material/data-table/mdc-data-table.scss";
@import "@material/button/mdc-button.scss";
@import "@material/list/mdc-list.scss";
@import "@material/menu-surface/mdc-menu-surface.scss";
@import "@material/menu/mdc-menu.scss";

.vue-cruder__list__value--editable {
  border: 1px solid orange;
}
.mdc-list-item {
  height: 48px;
  vertical-align: middle;
  align-items: center;
}
ul.simple-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
  list-style: none;
}
</style>
