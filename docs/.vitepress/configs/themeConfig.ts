export const sidebarSource = {
  "/uniapp/": [
    {
      text: "uniapp",
      collapsed: false,
      items: [
        { text: "Uniapp介绍", link: "/uniapp/description" },
        { text: "Uniapp兼容坑点", link: "/uniapp/compatibility" }
      ]
    }
  ],
  "/note/": [
    {
      text: "笔记",
      collapsed: false,
      items: [
        { text: "从这开始", link: "/note/about" },
        { text: "HTML", link: "/note/base" },
        { text: "CSS-基础", link: "/note/css-base" },
        { text: "CSS-进阶", link: "/note/css-advanced" },
        { text: "JS-基础", link: "/note/js-base" }
      ]
    }
  ]
}

export const navSource = [
  { text: "首页", link: "/" },
  { text: "前端笔记", link: "/note/base" },
  { text: "Uniapp", link: "/uniapp/index" }
]
