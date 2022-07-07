# CRUD

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

## Create
Performs a `POST`


## Read
Performs a`GET` for a list or a single record.
### Usage
- `service.read()`
- `service.read(1)` 
- `service.read('13de-3fvf-vf4g')` 

## Update
Performs a `PUT`

## Delete
Performs a `DELETE`