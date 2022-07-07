export default {
  base: "/vue-cruder/",
  title: "Vue CRUDer",
  description: "CRUD maker",
  themeConfig: {
    footer: {
      copyright: "Copyright © 2022-present Alan Balen Schio",
    },
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
            { text: "Components", link: "/ui/components/" },
            { text: "Button", link: "/ui/components/button" },
            { text: "Form", link: "/ui/components/form" },
            { text: "Form Fields", link: "/ui/components/fields" },
            { text: "List", link: "/ui/components/list" },
          ],
        },
      ],
    },
  },
};
