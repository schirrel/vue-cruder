import { AxiosInstance } from "axios";
import { EMPTY_URI } from "../models/consts";

export const create =
  (api: AxiosInstance) =>
  ({ endpoint, object }: params) => {
    return api.post(endpoint || EMPTY_URI, object);
  };

export const createSimple = (api: AxiosInstance) => (body) => {
  return api.post(EMPTY_URI, body);
};
