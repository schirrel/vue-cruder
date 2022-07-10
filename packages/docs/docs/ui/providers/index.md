# Providers

> You can have a sneakpeak of the provider functionality at [Demo](https://schirrel.dev/vue-cruder/demo)

Providers are built in functionalities of CRUD.
Are mean to be a route with all in to be used as a plugin and play with adjust of a simple configuration.

It is being design to be used like:

```js
const createProductRoute = createRoute({
  name: "createProduct",
  path: "/product",
  options: {
    title: "Create a New Product",
    description: "We are gonna use cars for the example",
    type: "create",
    resource: "https://jsonplaceholder.typicode.com/posts",
    formOptions: {...}
  },
});
```

and so add it to you `routes` array at `Router` config, and its ready for use.

| Prop                  | Type          | name                                                                                                                       | Required |
| --------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- | -------- |
| `name`                | `string`      | The name to be passe to the Vue Router object                                                                              | yes      |
| `path`                | `string`      | The path to be setup to the Vue Router object                                                                              | yes      |
| `options`             | `object`      | Configuration object fo the route                                                                                          | yes      |
| `options.title`       | `string`      | Title of the page                                                                                                          | yes      |
| `options.description` | `string`      | description message above the title of the page                                                                            | no       |
| `options.type`        | `string`      | The type of the page to be create. Must be one of `create`, `read` ,`update` or `delete`.                                  | yes      |
| `options.resource`    | `string`      | The endpoint to be setup at the resource                                                                                   | yes      |
| `options.formOptions` | `FormOptions` | Configuration of the form on the page. The `formOptions` prop follows the [Form](../components/form#interfaces) component. | ?        |

# Status

| Provider | Status      |
| -------- | ----------- |
| Create   | In progress |
