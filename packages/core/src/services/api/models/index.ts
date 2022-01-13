import { AxiosResponse } from "axios";

export interface params {
  endpoint: string;
  id?: string;
  object?: unknown;
  params?: unknown;
}

export interface CRUD {
  read: ({ endpoint, id }: params) => Promise<AxiosResponse<any, any>>;
  list: ({ endpoint, params }: params) => Promise<AxiosResponse<any, any>>;
  create: ({ endpoint, object }: params) => Promise<AxiosResponse<any, any>>;
  update: ({ endpoint, id, object }: params) => void;
  delete: ({ endpoint, id }: params) => Promise<AxiosResponse<any, any>>;
}

export interface SimpleCRUD {
  read: (id: string) => Promise<AxiosResponse<any, any>>;
  list: (params: params) => Promise<AxiosResponse<any, any>>;
  create: ({ endpoint, object }: params) => Promise<AxiosResponse<any, any>>;
  update: (id, object) => void;
  delete: (id : string) => Promise<AxiosResponse<any, any>>;
}
