import { defineConfig } from "vitepress"
import { navSource, sidebarSource } from "./configs/themeConfig"
export default defineConfig({
  base: "/",
  title: "魏大仙的前端文档站点",
  cleanUrls: true,
  description: "这是一个用vitepress开发的前端文档,包含一些坑点",
  srcDir: "src",
  themeConfig: {
    nav: navSource,

    sidebar: sidebarSource,

    socialLinks: [{ icon: "github", link: "https://github.com/weijunliang23/wjl.github.io" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present 君粮"
    }
  }
})
