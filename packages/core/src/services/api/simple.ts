import { AxiosRequestConfig } from "axios";

import { read } from "./read/simple";
import { create } from "./create/simple";
import { update } from "./update/simple";
import { del } from "./delete/simple";
import { SimpleCRUD } from "./models";

import { serviceFactory } from "./service";

export const createSimpleCRUD = (config: AxiosRequestConfig): SimpleCRUD => {
  const api = serviceFactory(config);

  return {
    read: read(api),
    create: create(api),
    update: update(api),
    delete: del(api),
  };
};
