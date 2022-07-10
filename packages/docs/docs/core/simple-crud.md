# Simple CRUD

This type of service works similar to the previous one, the difference is that createSimpleCRUD is _supposed_ to have the full endpoint as the passed url, and so it only perform the operations to it, working like a scoped service.

The constructor can recieve a simple endpoint url or a Axios configuration object.

```js
import { createSimpleCRUD } from "@vue-cruder/core";
// simple endpoint url
const services = createSimpleCRUD(
  "https://your-general-endpoint.com/api/posts"
);

// axios object
const services = createSimpleCRUD({
  baseURL: "https://your-general-endpoint.com/api/posts",
});
```

## Create

Performs a `POST`

```js
service.create(object);
```

### Params

| param    | type     | Description                              | Required |
| -------- | -------- | ---------------------------------------- | -------- |
| object   | `object` | Object to be send at body of the request | yes      |


### Usage

```js
const response = await service.create({})`
```

## Read

Performs a `GET`, can be user to retrieve a single record or a list.

### Single Record

Param

- id `string`, to be concatenated to the url.

#### Usage

```js
const singleResponse = await service.read("1");
const singleResponseByGuid = await service.read("13de-3fvf-vf4g");
```

### List Record

Param

- none, to perform a simple list request
- params `object`, to be perform request with query params such pagination or filter

#### Usage

```js
const listResponse = await service.read();
const paginationResponse = await service.read({ page: 1, size: 10 });
const filterResponse = await service.read({ name: "Jordan" });
```

## Update

Performs a `PUT`
```js
service.update(id, object);
```

### Params

| param    | type     | Description                            | Required |
| -------- | -------- | -------------------------------------- | -------- |
| id       | `string` | id of the record, or a empty string    | yes      |
| object   | `object` | content to be update                   | yes      |


### Usage

```js
const singleResponse = await service.update("1", {});
const singleResponseByGuid = service.update("13de-3fvf-vf4g", {});
```

## Delete

Performs a `DELETE`

```js
service.delete(id);
```

### Params

| param | type     | Description      | Required |
| ----- | -------- | ---------------- | -------- |
| id    | `string` | id of the record | yes      |

### Usage

```js
service.delete("13de-3fvf-vf4g");
service.delete("1");
```
