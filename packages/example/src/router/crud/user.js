import { createRoute } from "@vue-cruder/ui";

const createUser = createRoute({
  name: "createUser",
  path: "/user",
  options: {
    title:'Create a New User',
    type: "create",
    resource: "https://jsonplaceholder.typicode.com/users",
    formOptions: {
      onSuccess: () => {
        alert("Suuuuuucesso");
      },
      fields: [
        {
          id: "name",
          type: "text",
          validations: ["required", "maxlength:120", "minlength:10"],
          label: "Name",
        },
        {
          id: "email",
          type: "email",
          validations: ["required"],
          label: "E-mail",
        },
        {
          id: "id",
          type: "text",
          label: "ID",
          validations: ["required"],
        },
        {
          id: "city",
          type: "text",
          label: "City",
        },
        {
          id: "age",
          type: "number",
          validations: ["required", "minvalue:12"],
          label: "Age",
        },
      ],
    },
  },
});

export default [createUser];
