import { AxiosInstance } from "axios";
import { params } from "../models";
import { EMPTY_URI } from "../models/consts";

export const create =
  (api: AxiosInstance) =>
  ({ endpoint, object }: params) => {
    return api.post(endpoint || EMPTY_URI, object);
  };
