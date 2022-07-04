import { Input } from "@/components";
import { FieldOptions, Field, FieldType } from "../models";


const getComponent = (type: FieldType) => {
    switch (type) {

        default:
            return Input
    }

}

export const buildField = (options: FieldOptions): Field => {
    const _component = getComponent(options.type)
    return {
        options,
        validation: () => {

        },
        component: new _component(options)
    }
}