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
      {
        text: "Demo",
        link: "https://schirrel.dev/vue-cruder/demo",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/schirrel/vue-cruder" },
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
          items: [{ text: "Introduction", link: "/ui/" }],
        },
        {
          text: "Providers",
          items: [
            { text: "Introduction", link: "/ui/providers/" },
            { text: "Status", link: "/ui/providers/index#status" },
          ],
        },
        {
          text: "Components",
          items: [
            { text: "Status", link: "/ui/components/" },
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
