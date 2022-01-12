import { AxiosInstance } from "axios";

export const del =
  (api: AxiosInstance) =>
  ({ endpoint, id }: params) => {
    api.delete(`${endpoint}/${id}`);
  };

export const deleteSimple = (api: AxiosInstance) => (id: string) => {
  api.delete(`/${id}`);
};
