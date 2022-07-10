import { createRoute } from "@vue-cruder/ui";

const createProduct = createRoute({
  name: "createProduct",
  path: "/product",
  options: {
    title: "Create a New Product",
    description: "We are gonna use cars for the example",
    type: "create",
    resourceName: "https://jsonplaceholder.typicode.com/posts",
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
          type: "text",
          label: "Chassi",
          validations: ["required"],
        },
      ],
    },
  },
});

export default [createProduct];
