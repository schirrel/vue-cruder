import Input from "@/components/Input/Input.vue";
import { FieldOptions } from "@/components/model";

export const createFieldComponent = (field) => {
  const props = { ...field };
  props.type = props.type.toLowerCase();

  switch (field.type) {
    case FieldOptions.TEXT:
    case FieldOptions.PASSWORD:
    case FieldOptions.DATE:
      return {
        component: Input,
        properties: props,
      };
  }
};
