import { AxiosRequestConfig } from "axios";

import { read } from "./read/simple";
import { create } from "./create/simple";
import { update } from "./update/simple";
import { del } from "./delete/simple";
import { SimpleCRUD } from "./models";

import { serviceFactory } from "./service";

const isAxiosRequestConfig = (config: AxiosRequestConfig | string): config is AxiosRequestConfig => {
  return (<AxiosRequestConfig>config).baseURL !== undefined;
}

export const createSimpleCRUD = (config: AxiosRequestConfig | string): SimpleCRUD => {
  console.log('createSimpleCRUD config', config)
  const _config = isAxiosRequestConfig(config) ? config : {
    baseUrl: config
  }
  console.log('createSimpleCRUD _config', _config)

  const api = serviceFactory(_config as AxiosRequestConfig);
  console.log('createSimpleCRUD api', api)

  return {
    read: read(api),
    create: create(api),
    update: update(api),
    delete: del(api),
  };
};
