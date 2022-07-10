import { FormOptions, Field, FormBuild } from "../models";

import { buildField } from "../field";

export const formBuilder = (builderOptions: FormOptions): FormBuild => {
  const fields: Field[] = [];
  const { onSubmit, validate } = builderOptions;

  builderOptions.fields.forEach((each) => {
    fields.push(buildField(each));
  });

  return {
    fields,
    onSubmit,
    validate,
  };
};
