import { defineConfig } from "vuepress/config";
import { sidebar } from "./sidebar";

export default defineConfig({
  title: "Korean Tour Guide",
  description: "Local Korean tour guide",
  base: "/JDGuide/",

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: "Guide",
        link: "/guide/1_vuepressFirst",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
      {
        text: "GitHub",
        link: "https://github.com/jeonghun-project/JDGuide",
      },
    ],
    sidebar: [...sidebar.makeTree()],
  },
});
