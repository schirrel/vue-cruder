import { AxiosInstance } from "axios";
import { EMPTY_URI } from "../models/consts";

export const create = (api: AxiosInstance) => (body) => {
  return api.post(EMPTY_URI, body);
};
