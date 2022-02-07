import { AxiosInstance } from "axios";

export const del = (api: AxiosInstance) => (id: string) => {
  if (!id) throw Error("id is required");

  return api.delete(`/${id}`);
};
