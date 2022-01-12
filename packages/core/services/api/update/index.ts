import { AxiosInstance } from "axios";

export const update =
  (api: AxiosInstance) =>
  ({ endpoint, id, object }) => {
    api.put(`${endpoint}/${id}`, object);
  };

export const updateSimple = (api: AxiosInstance) => (id: string, object) => {
  api.put(`/${id}`, object);
};
