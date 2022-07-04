export type FieldType = 'text' | 'number' | 'email' | 'url' | 'date' | 'select' | 'checkbox' | 'radio'
export type FieldValidation = 'required' | 'empty' | 'max' | 'min' | 'maxlength'
    | 'minlength' | 'custom'

export interface FieldOptions {
    name: string
    id: string
    label: string
    validations: []
    type: FieldType
    required: boolean
    disabled: boolean
    disabledValidation: Function
    validation: Function
}

export interface Field {
    component: any,
    options: FieldOptions
    validation: Function
}
