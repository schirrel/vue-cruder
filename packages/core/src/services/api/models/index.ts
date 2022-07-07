import { AxiosResponse } from "axios";

export interface params extends simpleParams {
  endpoint: string;
}

export interface simpleParams {
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
  read: (args: string | simpleParams) => Promise<AxiosResponse<any, any>>;
  create: ({ object }: simpleParams) => Promise<AxiosResponse<any, any>>;
  update: (id, object) => void;
  delete: (id: string) => Promise<AxiosResponse<any, any>>;
}
