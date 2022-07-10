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

### Usage

```js
const response = await service.create({})`
```

## Read

Performs a`GET` for a list or a single record.

### Usage

```js
const listResponse = await service.read();
const singleResponse = await service.read(1);
const singleResponseByGuid = await service.read("13de-3fvf-vf4g");
```

## Update

Performs a `PUT`

### Usage


```js
const singleResponse = await service.put(1, {});
const singleResponseByGuid = service.put('13de-3fvf-vf4g', {})
```

## Delete

Performs a `DELETE`

### Usage

```js
service.delete('13de-3fvf-vf4g')
service.delete(1)
```
