import { AxiosInstance } from "axios";
import { EMPTY_URI } from "../models/consts";

export const read =
  (api: AxiosInstance) =>
  ({ endpoint, id }: params) => {
    if (!id) throw Error("id is required");

    return api.get(endpoint ? `${endpoint}/${id}` : `/${id}`);
  };

export const list =
  (api: AxiosInstance) =>
  ({ endpoint, params }: params) => {
    return api.get(endpoint ? `${endpoint}` : EMPTY_URI, { params });
  };

export const readSimple = (api: AxiosInstance) => (id: string) => {
  if (!id) throw Error("id is required");

  return api.get(`/${id}`);
};

export const listSimple = (api: AxiosInstance) => (params) => {
  return api.get(EMPTY_URI, { params });
};
