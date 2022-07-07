# Simple CRUD

This type of service works similar to the previous one, the difference is that createSimpleCRUD is _supposed_ to have the full endpoint as the `baseURL` and so it only perform the operations to it, working like a scoped service. e.g.:

```js
import { createSimpleCRUD } from "@vue-cruder/core";
const services = createSimpleCRUD({
  baseURL: "https://your-general-endpoint.com/api/posts",
});
```

## Create

Performs a `POST`

### Usage

- `service.create({})`

## Read

Performs a`GET` for a list or a single record.

### Usage

- `service.read("user")`
- `service.read(1)`
- `service.read('13de-3fvf-vf4g')`

## Update

Performs a `PUT`

### Usage

- `service.put('13de-3fvf-vf4g', {})`
- `service.put(1', {})`

## Delete

Performs a `DELETE`

### Usage

- `service.delete('13de-3fvf-vf4g')`
- `service.delete(1')`
