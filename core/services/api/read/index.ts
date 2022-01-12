import { AxiosInstance } from "axios";

export const read =
  (api: AxiosInstance) =>
  ({ endpoint, id }) => {
    api.get(`${endpoint}/${id}`);
  };
export const list =
  (api: AxiosInstance) =>
  ({ endpoint, params }) => {
    api.get(endpoint, { ...params });
  };

export const readSimple = (api: AxiosInstance) => (id) => {
  api.get(`/${id}`);
};

export const listSimple =
  (api: AxiosInstance) =>
  ({ params }) => {
    api.get({ ...params });
  };
