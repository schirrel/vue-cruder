import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

export const serviceFactory = (config: AxiosRequestConfig) => {
    const api: AxiosInstance = axios.create(config);
    config.paramsSerializer = (params) => {
      return qs.stringify(params);
    };
    return api;
  };
  