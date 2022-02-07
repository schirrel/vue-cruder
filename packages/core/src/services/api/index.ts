import { read, list } from "./read";
import { create } from "./create";
import { update } from "./update";
import { del } from "./delete";
import { CRUD } from "./models";

import { serviceFactory } from "./service";
import { AxiosRequestConfig } from "axios";

export const createCRUD = (config: AxiosRequestConfig): CRUD => {
  const api = serviceFactory(config);
  return {
    read: read(api),
    list: list(api),
    create: create(api),
    update: update(api),
    delete: del(api),
  };
};
