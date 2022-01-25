export const TYPES = {
  INPUT: {
    TEXT: "text",
    PASSWORD: "password",
    DATE: "date",
    BOOLEAN: "boolean",
    SELECT: "select",
  },
};
export enum FieldOptions {
  TEXT = "TEXT",
  PASSWORD = "PASSWORD",
  DATE = "DATE",
  BOOLEAN = "BOOLEAN",
  SELECT = "SELECT",
}

export interface FormFieldOptions {
  id: string;
  class?: string;
  type: FieldOptions;
  required?: boolean;
}


export interface ListHeader {
  key: string
  text: string
  align?: string
}