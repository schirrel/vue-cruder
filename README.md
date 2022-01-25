# WIP
# Vue CRUDer

An all in one Vue solution to help you create a CRUD based applications

You can use as:

- Admins
- Simple CRUD
- Maybe Dashboard

## Architecture

### Core Services

It provides CRUD based services with HTTP request built in:

- `read GET /:id`
- `list GET` with query params, you can use as a simple search or pagination
- `create POST` with body
- `update PUT /:id` with body
- `delete DELETE /:id` 

The HTTP client is based on [axios](https://github.com/axios/axios), and its create method receive an `AxiosRequestConfig` object, so if you need and security header or further configuration, you are free.

There are two types of configuration: `createCRUD` and `createSimpleCRUD` both of them expect the same props, only the result functions that behavior different.

**createCRUD**
This type of service are supposed to expect an other endpoint to concat the `baseURL` provided at the service creation. e.g.:

```js
import { createSimpleCRUD } from "@vue-cruder/core";
const services = createCRUD({
  baseURL: "https://your-general-endpoint.com/api",
});

services.read("user", "user-guid"); // Final: GET to https://your-general-endpoint.com/api/user/user-guid
services.create("profile", {
  /* profile body */
}); // Final: POST to https://your-general-endpoint.com/api/profile
```

**createSimpleCRUD**
This type of service works similar to the previous one, the difference is that createSimpleCRUD is _supposed_ to have the full endpoint as the `baseURL` and so it only perform the operations to it, working like a scoped service. e.g.:

```js
import { createSimpleCRUD } from "@vue-cruder/core";
const services = createSimpleCRUD({
  baseURL: "https://your-general-endpoint.com/api/posts",
});

services.read("post-guid");
services.list();
services.list({ page: 1, size: 10 });
services.create({
  /* post body */
});
services.update("post-guid", {
  /* post body */
});
services.delete("post-guid");
```

### UI

It provides a built `<Form>` and `<List>` components which self handle actions

**Form**  
It receives a list of field and their arguments, such as HTML props, and render a form enabling to create new entity.

You can pass a `:service=""` to let the Form handle the C from the CRUD.
It also emits `@submit` and `@error` events just in case you want to deal with it yourself.
Example:

```
  <Form
      name="profileForm"
      title="New Profile
      :fields="formFields"
      @error="errorSaving"
      :service="service"/node_modules>

```

```
  <Form
      name="tagForm"
      title="New Tag
      :fields="formFields"
      @submit="save" />

```



**List**  
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
By adding `use-crud-actions` prop if will inject _edit_ and _delete_ actions to each row, and when one of the is clicked, it will perform `service.edit` or `service.delete`.



## Libraries
- [Axios](https://github.com/axios/axios)
- [qs](https://github.com/ljharb/qs)
- [Vue Dynamic Forms](https://github.com/asigloo/vue-dynamic-forms)
- [Material Components Web](https://github.com/material-components/material-components-web)
- [Material Web](https://github.com/material-components/material-web)