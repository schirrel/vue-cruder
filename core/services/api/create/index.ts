import { AxiosInstance } from "axios";

export const create =
  (api: AxiosInstance) =>
  ({ endpoint, object }) => {
    api.post(endpoint, object);
  };

export const createSimple =
  (api: AxiosInstance) =>
  ({ object }) => {
    api.post(object);
  };
