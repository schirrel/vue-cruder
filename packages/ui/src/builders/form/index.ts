import { FormBuilder, Field, FormBuild } from "../models";

import { buildField } from "../field";

export const formBuilder = (builderOptions: FormBuilder): FormBuild => {
  const fields: Field[] = [];
  const { submit, validate } = builderOptions;

  builderOptions.fields.forEach((each) => {
    fields.push(buildField(each));
  });

  return {
    fields,
    submit,
    validate,
  };
};
