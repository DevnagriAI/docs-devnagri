const base = process.env.GH ? "/vuepress/" : "/";

module.exports = {
  title: "DEVNAGRI",
  description: "We Celebrate INDIAN Languages",
  dest: "vuepress",
  base,
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  serviceWorker: true,
  themeConfig: {
    repo: "FourtekIT/devnagri-docs",
    editLinks: true,
    logo: "/logo-dark.png",
    nav: [
      {
        text: "Home",
        link: "http://www.devnagri.com",
      },
      {
        text: "Guide",
        link: "/guide/Client_Guide.html",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "User Guide",
          collapsable: false,
          children: ["Client_Guide", "Glossary"],
        },
        {
          title: "Translator Guide",
          collapsable: false,
          children: ["Translator"],
        },
        {
          title: "Developer Guide",
          collapsable: false,
          children: ["Api"],
        },
      ],
    },
  },
};
