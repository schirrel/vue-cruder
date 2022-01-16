import { FieldOptions } from "@/components/models";

export interface FormFieldOptions {
  id: string;
  class?: string;
  type: FieldOptions;
  required?: boolean;
}

export interface FormOptions {
  fields: FormFieldOptions[];
}
