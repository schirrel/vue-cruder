import { FormBuilder, Field } from "../models";

import { buildField } from '../field'

export const formBuilder = (builderOptions: FormBuilder) => {

    const fields: Field[] = []
    const { submit, validate } = builderOptions

    builderOptions.fields.forEach(each => {
        fields.push(buildField(each))
    })

    return {
        fields, submit, validate

    }
}