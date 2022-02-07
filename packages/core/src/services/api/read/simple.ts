import { AxiosInstance } from "axios";
import { EMPTY_URI } from "../models/consts";

const get = (api: AxiosInstance) => (id: string) => {
  if (!id) throw Error("id is required");

  return api.get(`/${id}`);
};

const list = (api: AxiosInstance) => (params) => {
  return api.get(EMPTY_URI, { params });
};

export const read = (api: AxiosInstance) => (args) => {
  if (typeof args === "string") {
    return get(api)(args);
  } else {
    return list(api)(args);
  }
};
