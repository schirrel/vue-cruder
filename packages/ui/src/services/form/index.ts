import { Input , Checkbox, DatePicker} from 'element-ui';
import { FieldOptions } from "@/components/models";

export const createFieldComponent = (field) => {
  const props = { ...field };
  props.type = props.type.toLowerCase();

  switch (field.type) {
    case FieldOptions.TEXT:
    case FieldOptions.PASSWORD:
      return {
        component: Input,
        properties: props,
      };
      case FieldOptions.DATE:
        return {
          component:  DatePicker,
          properties: props,

        }
    case FieldOptions.BOOLEAN:
      delete props.type;
      return {
        component: Checkbox,
        properties: props,
      };
  }
};

export const getFieldValue = (field, form) => {
  switch (field.type) {
    case FieldOptions.TEXT:
    case FieldOptions.PASSWORD:
    case FieldOptions.DATE:
      return form.elements.namedItem(field.id).value;
    case FieldOptions.BOOLEAN:
      return form.elements.namedItem(field.id).checked;
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
