import { AxiosInstance } from "axios";
import { params } from "../models";

export const update =
  (api: AxiosInstance) =>
  ({ endpoint, id, object }: params) => {
    if (!id) throw Error("id is required");

    api.put(`${endpoint}/${id}`, object);
  };
