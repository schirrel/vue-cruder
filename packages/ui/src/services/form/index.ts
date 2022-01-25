import { FieldOptions } from "@/components/models";

export const createFieldComponent = (field) => {
  const props = { ...field };
  props.type = props.type.toLowerCase();

  // switch (field.type) {
  //   case FieldOptions.TEXT:
  //   case FieldOptions.PASSWORD:
  //     return {
  //       component: Input,
  //       properties: props,
  //     };
  //     case FieldOptions.DATE:
  //       return {
  //         component:  DatePicker,
  //         properties: props,

  //       }
  //   case FieldOptions.BOOLEAN:
  //     delete props.type;
  //     return {
  //       component: Checkbox,
  //       properties: props,
  //     };
  // }
};

export const getFieldValue = (field, element) => {
  switch (field.type.toUpperCase()) {
    case FieldOptions.TEXT:
    case FieldOptions.PASSWORD:
    case FieldOptions.DATE:
      return element.value;
    case FieldOptions.BOOLEAN:
      return element.checked;
  }
};

export const createFormResultFields = (fields, form) => {
  const resultModel = {};

  fields.forEach((field) => {
    const fieldValue = getFieldValue(field, form);
    if (field.required || fieldValue !== undefined) {
      resultModel[field.id] = fieldValue;
    }
  });
  return resultModel;
};
