import { AxiosInstance } from "axios";

export const del =
  (api: AxiosInstance) =>
  ({ endpoint, id }: params) => {
    if (!id) throw Error("id is required");

    return api.delete(`${endpoint}/${id}`);
  };

export const deleteSimple = (api: AxiosInstance) => (id: string) => {
  if (!id) throw Error("id is required");

  return api.delete(`/${id}`);
};
