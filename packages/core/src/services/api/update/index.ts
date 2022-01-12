import { AxiosInstance } from "axios";

export const update =
  (api: AxiosInstance) =>
  ({ endpoint, id, object }: params) => {
    api.put(`${endpoint}/${id}`, object);
  };

export const updateSimple =
  (api: AxiosInstance) => (id: string, object: unknown) => {
    api.put(`/${id}`, object);
  };
