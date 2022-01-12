import { AxiosInstance } from "axios";

export const create =
  (api: AxiosInstance) =>
  ({ endpoint, object }: params) => {
    api.put(endpoint, object);
  };

export const createSimple =
  (api: AxiosInstance) =>
  ({ object }: params) => {
    api.put("", object);
  };
