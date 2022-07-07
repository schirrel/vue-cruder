# List

> Powered by [Material Web Data Table](https://material.io/components/data-tables/web#using-data-tables)

All lists require a `:service=""` which will be used to populate the list using the `service.read` function. Also, the `service` is used for CRUD actions if you choose to use them.

## Props

| Prop                | Description                                                                                                                         | Required |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `service`           | Object of the service to be used for the list, can be crud or simpleCrud                                                            | yes      |
| `headers`           | Array that define the columns of your list. Requires to be as `{ text: "Name",key: "name"` }                                        | yes      |
| `actions`           | Custom actions to be rendered. Requires to be as `{type: "string-unique", text: "string", callback: (row) => { ... }`               | no       |
| `use-crud-actions`  | inject _edit_ and _delete_ actions to each row, and when one of the is clicked, it will perform `service.edit` or `service.delete`. | no       |
| `actions-condensed` | Use the actions as context-menu                                                                                                     | no       |

## Usage

###  Simple List

```html
<List :service="service" :headers="headers" />
```

### Custom actions

```html
<List :service="service" :headers="headers" :actions="actions" />
```

These actions require a `callback` function that will be called once the actions were clicked and the `row` selected.

### CRUD actions

```html
<List :service="service" :headers="headers" use-crud-actions />
```
