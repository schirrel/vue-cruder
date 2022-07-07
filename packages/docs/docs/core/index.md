# Core

It provides CRUD based services with HTTP request built in:

- `read GET ` it can recieve a `/:id` string or a params object `{}`, query params, so you can use as a simple search or pagination
- `create POST` with body
- `update PUT /:id` with body
- `delete DELETE /:id` 

The HTTP client is based on [axios](https://github.com/axios/axios), and its create method receive an `AxiosRequestConfig` object, so if you need and security header or further configuration, you are free.

There are two types of configuration: `createCRUD` and `createSimpleCRUD` both of them expect the same props, only the result functions that behavior different.

