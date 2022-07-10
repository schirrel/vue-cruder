import { VueConstructor } from "vue";

export type FieldType =
  | "text"
  | "number"
  | "email"
  | "url"
  | "date"
  | "select"
  | "checkbox"
  | "radio";

export interface FieldOptions {
  id: string;
  label: string;
  validations: string[];
  type: FieldType;
}

export interface Field {
  component: VueConstructor<Vue>;
  options: FieldOptions;
}
