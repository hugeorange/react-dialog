---
nav:
  title: Components
  order: 1
---

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
     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   };
   ```

4. Inter & Inter Display Fonts, If you're making a web page, you can use the following HTML and CSS:
   ```html
   <!-- HTML in your document's head -->
   <link rel="preconnect" href="https://rsms.me/" />
   <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
   ```

## 组件开发

1. 每个组件新建一个文件夹大驼峰规则命名，目录结构为,

<Tree>
  <ul>
    <li>
      src
      <ul>
        <ul>
          <li>
            Avatar  
            <ul>
              <li>
              index.tsx
              <small>如果有自定义 scss 样式，可以写在 src/assets/style/components/avatar.scss</small>
              </li>
              <li>index.md</li>
              <li>
                demo
                <small>组件示例，可在 demo 目录下书写，然后统一引入到 index.md 里面</small>
                <ul>
                  <li>demo1.tsx<li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </li>
  </ul>
</Tree>

2. 组件内容（组件最外层示意）

```js
import React from 'react';

// 定义组件属性
type TAvatarProps = {
  title: string,
};
// 组件主体
export default function Avatar({ title }: TAvatarProps) {
  return <div className="ru-avatar"></div>;
}
```

3. 组件开发可以使用 [shadcn/ui](https://ui.shadcn.com/) 这个 headless ui library
4. 如果遇到和之前写过的组件比较类似，切记不要直接复制之前代码
5. icon 方案 [remixicon](https://remixicon.com/)，React 组件[@remixicon/react](https://www.npmjs.com/package/@remixicon/react)，对于 remixicon 没有的 icon 组件，建议放到 @rushable/icon2 里面去维护
