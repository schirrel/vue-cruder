# Simple CRUD

This type of service works similar to the previous one, the difference is that createSimpleCRUD is _supposed_ to have the full endpoint as the `baseURL` and so it only perform the operations to it, working like a scoped service. e.g.:

```js
import { createSimpleCRUD } from "@vue-cruder/core";
const services = createSimpleCRUD({
  baseURL: "https://your-general-endpoint.com/api/posts",
});

services.read("post-guid");
services.read();
services.read({ page: 1, size: 10 });
services.create({
  /* post body */
});
services.update("post-guid", {
  /* post body */
});
services.delete("post-guid");
```
