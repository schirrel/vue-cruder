import List from "../views/components/List.vue";
import Form from "../views/components/Form.vue";
import General from "../views/components/General.vue";

export const componentRoutes = [
  {
    name: "List",
    path: "/list",
    component: List,
  },
  {
    name: "Form",
    path: "/form",
    component: Form,
  },
  {
    name: "General",
    path: "/general",
    component: General,
  },
];
