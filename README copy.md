# AlignUI

AlignUI base components

## 如何使用 ？

1. `pnpm i @rushable/align-ui`
2. 在宿主项目入口文件处引入 `import '@rushable/align-ui/dist/alignui.min.css'`，所有的 css 变量、组件 scss 样式均由此文件引入
3. 宿主项目配置 tailwind.config.js

   ```js
   // 宿主项目 tailwind.config.js
   export default {
     // 使用组件库的 tailwind 配置文件作为预设配置
     presets: [require('@rushable/align-ui/tailwind.config')],
     content: [
       './index.html',
       './src/**/*.{js,ts,jsx,tsx}',
       // 设置 tailwind 扫描 alignui
       'node_modules/@rushable/align-ui/**/*.{js,ts,jsx,tsx}',
     ],
   };
   ```

4. Inter & Inter Display Fonts, If you're making a web page, you can use the following HTML and CSS:
   ```html
   <!-- HTML in your document's head -->
   <link rel="preconnect" href="https://rsms.me/" />
   <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
   ```
