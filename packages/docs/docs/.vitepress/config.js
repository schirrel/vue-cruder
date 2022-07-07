export default {
  title: "Vue CRUDer",
  description: "CRUD maker",
  themeConfig: {
    nav: [
      {
        text: "Core",
        link: "/core/",
        activeMatch: "/core/",
      },
      {
        text: "UI",
        link: "/ui/",
        activeMatch: "/ui/",
      },
    ],
    sidebar: {
      "/core/": [
        {
          text: "Core",
          items: [
            { text: "CRUD", link: "/core/crud" },
            { text: "Simple CRUD", link: "/core/simple-crud" },
          ],
        },
      ],

      "/ui/": [
        {
          text: "UI",
          items: [
            { text: "Components", link: "/components/" },
            { text: "Form", link: "/components/form" },
            { text: "List", link: "/components/list" },
          ],
        },
      ],
    },
  },
};
