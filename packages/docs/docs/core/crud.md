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

### Usage

```js
const response = await service.create("user", {
  /*data*/
});
```

Concatenating the URL and so making a HTTP POST Request to the full URL `https://your-general-endpoint.com/api/user`

## Read

Performs a`GET` for a list or a single record.

### Usage

```js
service.read("user");
service.read("user", 1);
service.read("user", "13de-3fvf-vf4g");
```

Concatenating the URL and so making a HTTP GET Request to the full URL `https://your-general-endpoint.com/api/user`

## Update

Performs a `PUT`

### Usage

```js
service.put("user",'13de-3fvf-vf4g', {})
service.put("user",1, {})
```

Concatenating the URL and so making a HTTP PUT Request to the full URL `https://your-general-endpoint.com/api/user`

## Delete

Performs a `DELETE`

### Usage

```js
service.delete("user", "13de-3fvf-vf4g");
service.delete("user", 1);
```

Concatenating the URL and so making a HTTP DELETE Request to the full URL `https://your-general-endpoint.com/api/user`
