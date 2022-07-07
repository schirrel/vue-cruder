import { Field, FieldOptions } from "./field";

export interface FormOptions {
  title?: string
  fields: FieldOptions[]
  submit?: () => void
  validate?: () => void
  onSuccess?: () => void
  onError?: () => void
}

export interface FormBuild {
  fields: Field[];
  submit?: () => void;
  validate?: () => void;
}
