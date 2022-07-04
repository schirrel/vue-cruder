import { FieldOptions } from "./field"

export interface FormBuilder {
    fields: FieldOptions[]
    submit: Function
    validate: Function
}