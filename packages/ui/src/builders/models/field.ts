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
// export type FieldValidation = 'required' | 'empty' | 'max' | 'min' | 'maxlength'
//     | 'minlength' | 'custom'


export interface FieldOptions {
  id: string;
  label: string;
  validations: string[];
  type: FieldType;
}

export interface Field {
  component: VueConstructor<Vue>;
  options: FieldOptions;
  validation: () => void;
}
