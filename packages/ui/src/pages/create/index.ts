import CreatePageComponent from "./Create.vue";

export const CreatePage = {
  name: "CreatePage",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    resourceName: {
      type: String,
      required: true,
    },
    formOptions: {
      type: Object,
      required: true,
    },
  },
  render(createElement: any, context: any) {
    const data = context?.data;
    return createElement(CreatePageComponent, data);
  },
};
