import { createRoute } from "@vue-cruder/ui";

const createProduct = createRoute({
  name: "createProduct",
  path: "/product",
  options: {
    type: "create",
    resourceName: "https://jsonplaceholder.typicode.com/posts",
    formOptions: {
      title: "Create Product",
      onSuccess: () => {
        alert("Suuuuuucesso");
      },
      onError: (err) => {
        console.log(err);
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
