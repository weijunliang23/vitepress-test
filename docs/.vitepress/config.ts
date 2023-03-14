import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: ".",
  title: "My Awesome Project",
  cleanUrls: true,
  description: "A VitePress Site",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Uniapp", link: "/uniapp/index" }
    ],

    sidebar: {
      "/uniapp/": [
        {
          text: "uniapp",
          items: [
            { text: "Uniapp介绍", link: "/uniapp/description" },
            { text: "Uniapp兼容坑点", link: "/uniapp/compatibility" }
          ]
        }
      ]
    },

    socialLinks: [{ icon: "github", link: "https://github.com/weijunliang23/wjl.github.io" }]
  }
})
