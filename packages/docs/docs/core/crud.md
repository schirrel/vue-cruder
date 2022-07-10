# CRUD

This type of service are supposed to expect an other endpoint to concat the `baseURL` provided at the service creation. e.g.:

```js
import { createCRUD } from "@vue-cruder/core";
const services = createCRUD({
  baseURL: "https://your-general-endpoint.com/api",
});
```

## Create

Performs a `POST`

```js
service.create(endpoint, object);
```

### Params

| param    | type     | Description                              | Required |
| -------- | -------- | ---------------------------------------- | -------- |
| endpoint | `string` | endpoint to be concatenated to the url   | yes      |
| object   | `object` | Object to be send at body of the request | yes      |

### Usage

```js
const response = await service.create("user", {
  name: "Will",
  age: 12,
});
```

Concatenating the URL and so making a HTTP POST Request to the full URL `https://your-general-endpoint.com/api/user`

## Read

Performs a`GET` for a list or a single record.

```js
service.read(endpoint, args);
```

### Params

| param    | type                | Description                                     | Required |
| -------- | ------------------- | ----------------------------------------------- | -------- |
| endpoint | `string`            | endpoint to be concatenated to the url          | yes      |
| args     | `string` or`object` | Can be and id string, empty, or a params object | no       |

### Usage

```js
service.read("user");
```

Concatenating the URL and so making a HTTP GET Request to the full URL `https://your-general-endpoint.com/api/user`

```js
service.read("user", "13de-3fvf-vf4g");
```

> Final URL `https://your-general-endpoint.com/api/user/13de-3fvf-vf4g`

```js
service.read("user", { page: 1, orderBY: "name" });
```

> Final URL `https://your-general-endpoint.com/api/user?page=1&orderBY=name`

## Update

Performs a `PUT`

```js
service.update(endpoint, id, object);
```

### Params

| param    | type     | Description                            | Required |
| -------- | -------- | -------------------------------------- | -------- |
| endpoint | `string` | endpoint to be concatenated to the url | yes      |
| id       | `string` | id of the record, or a empty string    | yes      |
| object   | `object` | content to be update                   | yes      |

### Usage

```js
service.update("user", "1", {
  name: "Margie",
  age: 11,
});

service.update("updateValue", "", { id: 4, brand: "Ford", age: 11 });
```

Concatenating the URL and so making a HTTP PUT Request to the full URL `https://your-general-endpoint.com/api/user/1` with a body.

## Delete

Performs a `DELETE`

```js
service.delete(endpoint, id);
```

### Params

| param    | type     | Description                            | Required |
| -------- | -------- | -------------------------------------- | -------- |
| endpoint | `string` | endpoint to be concatenated to the url | yes      |
| id       | `string` | id of the record                       | yes      |

### Usage

```js
service.delete("user", "autogenerate-id");
```

Concatenating the URL and so making a HTTP DELETE Request to the full URL `https://your-general-endpoint.com/api/user/autogenerate-id`
