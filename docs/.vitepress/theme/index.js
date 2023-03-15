// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme"
import "./styles/custom.css"
import Image from "../../src/components/Image.vue"
import Button from "../../src/components/Button.vue"
export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("Image", Image)
    ctx.app.component("Button", Button)
  }
}
