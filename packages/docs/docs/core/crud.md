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
- `service.create("user",{})`

## Read
Performs a`GET` for a list or a single record.
### Usage
- `service.read("user")`
- `service.read("user",1)` 
- `service.read("user",'13de-3fvf-vf4g')` 

## Update
Performs a `PUT`
### Usage
- `service.put("user",'13de-3fvf-vf4g', {})`
- `service.put("user",1', {})`

## Delete
Performs a `DELETE`
### Usage
- `service.delete("user",'13de-3fvf-vf4g')`
- `service.delete("user",1')`