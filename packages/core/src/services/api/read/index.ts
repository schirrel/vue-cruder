import { AxiosInstance } from "axios";

export const read =
  (api: AxiosInstance) =>
  ({ endpoint, id }: params) => {
    api.get(`${endpoint}/${id}`);
  };
export const list =
  (api: AxiosInstance) =>
  ({ endpoint, params }: params) => {
    api.get(endpoint, { params });
  };

export const readSimple = (api: AxiosInstance) => (id: string) => {
  api.get(`/${id}`);
};

export const listSimple =
  (api: AxiosInstance) =>
  ({ params }: params) => {
    api.get("", { params });
  };
