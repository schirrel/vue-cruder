import CreatePageComponent from "./Create.vue";


export const CreatePage = {
  name: "CreatePage",
  props: {
    page: {
      type: Object,
      required: true,
    },
    resource: {
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
