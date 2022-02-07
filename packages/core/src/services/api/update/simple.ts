import { AxiosInstance } from "axios";

export const update = (api: AxiosInstance) => (id: string, object: unknown) => {
  if (!id) throw Error("id is required");

  api.put(`/${id}`, object);
};
