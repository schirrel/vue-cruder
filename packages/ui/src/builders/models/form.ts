import { Field, FieldOptions } from "./field";

export interface FormOptions {
  title?: string;
  fields: FieldOptions[];
  validate?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
}

export interface FormBuild {
  fields: Field[];
  onSubmit?: () => void;
  validate?: () => void;
}
