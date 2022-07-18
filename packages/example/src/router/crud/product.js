import { createRoute } from "@vue-cruder/ui";

const createProduct = createRoute({
  name: "createProduct",
  path: "/product",
  resource: "https://jsonplaceholder.typicode.com/posts",
  page: {
    type: "create",
    title: "Create a New Product",
    description: "We are gonna use cars for the example",
  },
  options: {
    formOptions: {
      onSuccess: () => {
        alert("Suuuuuucesso");
      },
      fields: [
        {
          id: "model",
          type: "text",
          validations: ["required", "maxlength:120", "minlength:3"],
          label: "Model",
        },
        {
          id: "brand",
          type: "text",
          validations: ["required", "minlength:3"],
          label: "Brand",
        },
        {
          id: "chassi",
          type: "number",
          label: "Chassi",
          validations: ["required"],
        },
        {
          id: "created",
          type: "date",
          label: "Created At",
          validations: ["required"],
        },
      ],
    },
  },
});

export default [createProduct];
