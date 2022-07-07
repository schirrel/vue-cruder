import { Input } from "@/components";
import { VueConstructor } from "vue";
import { FieldOptions, Field, FieldType } from "../models";
import { buildValidations } from "./validation";

const getComponent = (type: FieldType): VueConstructor => {
  switch (type) {
    default:
      return Input;
  }
};

export const buildField = (options: FieldOptions): Field => {
  const component = getComponent(options.type);
  const validations = buildValidations(options.validations);
  const finalOptions = {
    ...options, ...{ validations: undefined }
  }
  return {
    options: {
      ...finalOptions,
      ...validations,
    },
    validation: () => {
      console.log("calling validations");
    },
    component,
  };
};
