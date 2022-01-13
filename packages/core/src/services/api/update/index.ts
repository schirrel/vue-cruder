import { AxiosInstance } from "axios";
import { params } from "../models";

export const update =
  (api: AxiosInstance) =>
  ({ endpoint, id, object }: params) => {
    if (!id) throw Error("id is required");

    api.put(`${endpoint}/${id}`, object);
  };

export const updateSimple =
  (api: AxiosInstance) => (id: string, object: unknown) => {
    if (!id) throw Error("id is required");

    api.put(`/${id}`, object);
  };
