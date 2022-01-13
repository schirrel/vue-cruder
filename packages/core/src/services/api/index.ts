import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

import { read, list, readSimple, listSimple } from "./read";
import { create, createSimple } from "./create";
import { update, updateSimple } from "./update";
import { del, deleteSimple } from "./delete";
import { CRUD, SimpleCRUD } from "./models";

const _createService = (config: AxiosRequestConfig) => {
  const api: AxiosInstance = axios.create(config);
  config.paramsSerializer = (params) => {
    return qs.stringify(params);
  };
  return api;
};

export const createCRUD = (config: AxiosRequestConfig): CRUD => {
  const api = _createService(config);
  return {
    read: read(api),
    list: list(api),
    create: create(api),
    update: update(api),
    delete: del(api),
  };
};

export const createSimpleCRUD = (config: AxiosRequestConfig): SimpleCRUD => {
  const api = _createService(config);

  return {
    read: readSimple(api),
    list: listSimple(api),
    create: createSimple(api),
    update: updateSimple(api),
    delete: deleteSimple(api),
  };
};
