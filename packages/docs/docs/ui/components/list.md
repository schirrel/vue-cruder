# List
> Powered by [Material Web Data Table](https://material.io/components/data-tables/web#using-data-tables)
All lists require a `:service=""` which will be used to populate the list using the `service.list` function. Also, the `service` is used for CRUD actions if you choose to use them.


- Simple List  
` <List :service="service" :headers="headers" />`Ï

- With custom actions
```html
    <List
      :service="service"
      :headers="headers"
      :actions="actions"
    />
```
These actions require a `callback` function that will be called once the actions were clicked and the `row` selected.

- With default CRUD actions, edit and delete
```html
    <List
      :service="service"
      :headers="headers"
      use-crud-actions
    />
```
| Prop | Description |  
|---|---|  
| use-crud-actions | inject _edit_ and _delete_ actions to each row, and when one of the is clicked, it will perform `service.edit` or `service.delete`. |
| actions-condensed | Use the actions as context-menu |  
