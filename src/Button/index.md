---
title: Button
order: 1
group:
  title: base
  order: 1
---

## Examples

<code src="./demo/basic.tsx">Basic Filled Size</code>

### API - Button.Root

| Prop      | Description                 | Type                                                          | Default |
| --------- | --------------------------- | ------------------------------------------------------------- | ------- |
| className |                             | `string`                                                      | -       |
| type      | 按钮主题                    | `'primary' 'neutral' 'error'`                                 | primary |
| style     | 按钮样式                    | `'filled' 'stroke' 'lighter' 'ghost'`                         | filled  |
| size      | 按钮尺寸                    | `'xl' 'l'  'm'  's'  'xs'  '2xs'`                             | m       |
| htmlType  | 设置 button 原生的 type 值  | `'submit' 'reset' 'button'`                                   | button  |
| htmlStyle | 设置 button 原生的 style 值 | `CSSProperties`                                               | -       |
| loading   | 设置按钮载入状态            | `boolean`                                                     | false   |
| disabled  | 设置按钮失效状态            | `boolean`                                                     | false   |
| children  | 按钮内容 可传递 Button.Icon | `ReactNode ReactNode[]`                                       | -       |
| onClick   | 点击按钮时的回调            | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;` | -       |

<code src="./demo/link.tsx">Link Button </code>

### API - Link Button

| Prop      | Description                                       | Type                                                          | Default |
| --------- | ------------------------------------------------- | ------------------------------------------------------------- | ------- |
| className |                                                   | `string`                                                      | -       |
| href      | a tag 跳转链接 有值则渲染为 a                     | `string`                                                      | button  |
| target    | a target                                          | `string`                                                      | -       |
| style     | 按钮主题，如果颜色不在范围内，则用 class 强行覆盖 | ` 'gray' 'black' 'primary' 'error'`                           | primary |
| size      | 按钮尺寸                                          | `'m' 's'`                                                     | m       |
| disabled  | 设置按钮失效状态                                  | `boolean`                                                     | false   |
| underline | 是否显示下划线                                    | `boolean`                                                     | false   |
| children  | 按钮文本                                          | `ReactNode`                                                   | -       |
| onClick   | 点击按钮时的回调                                  | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;` | -       |

<code src="./demo/social.tsx">Social Button </code>

### API - Social Button

| Prop      | Description                             | Type                                                          | Default |
| --------- | --------------------------------------- | ------------------------------------------------------------- | ------- |
| className |                                         | `string`                                                      | -       |
| icon      |                                         | `ReactElement`                                                | -       |
| onlyIcon  | 仅方形 icon                             | `boolean`                                                     | false   |
| style     | 按钮样式                                | `'filled'  'stroke'`                                          | filled  |
| bgColor   | 背景颜色 例如:`#000` 仅 filled 状态有效 | `string `                                                     | -       |
| htmlStyle | 设置 button 原生的 style 值             | `CSSProperties`                                               | -       |
| disabled  | 设置按钮失效状态                        | `boolean`                                                     | false   |
| children  | 按钮文本                                | `ReactNode`                                                   | -       |
| onClick   | 点击按钮时的回调                        | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;` | -       |

<code src="./demo/fancy.tsx">Fancy Button </code>

### API - Fancy Button

| Prop      | Description                 | Type                                                          | Default |
| --------- | --------------------------- | ------------------------------------------------------------- | ------- |
| className |                             | `string`                                                      | -       |
| iconLeft  |                             | `ReactElement`                                                | -       |
| iconRight |                             | `ReactElement`                                                | -       |
| style     | 按钮样式                    | `'filled' 'stroke' `                                          | filled  |
| size      | 按钮尺寸                    | `'m'  's'  'xs' `                                             | m       |
| htmlStyle | 设置 button 原生的 style 值 | `CSSProperties`                                               | -       |
| loading   | 设置按钮载入状态            | `boolean`                                                     | false   |
| disabled  | 设置按钮失效状态            | `boolean`                                                     | false   |
| children  | 按钮文本                    | `ReactNode`                                                   | -       |
| onClick   | 点击按钮时的回调            | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;` | -       |

<code src="./demo/compact.tsx">Compact Button </code>

### API - Compact Button

| Prop         | Description      | Type                                                          | Default |
| ------------ | ---------------- | ------------------------------------------------------------- | ------- |
| className    |                  | `string`                                                      | -       |
| icon         |                  | `ReactElement`                                                | -       |
| style        | 按钮样式         | `'filled' 'stroke' 'white' `                                  | filled  |
| size         | 按钮样式         | `'l' 'm' `                                                    | m       |
| isFullRadius | 是否是圆角       | `boolean`                                                     | false   |
| disabled     | 设置按钮失效状态 | `boolean`                                                     | false   |
| onClick      | 点击按钮时的回调 | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;` | -       |

<code src="./demo/group.tsx">Group Button</code>

## API - Group

| Props     | Description        | Type                            | Default |
| --------- | ------------------ | ------------------------------- | ------- |
| className | 传入的样式         | `string`                        |         |
| size      | 尺寸               | `s、 xs、 2xs `                 | -       |
| value     | 仅在 Group 时需要  | `string `                       | -       |
| onClick   | 仅单独使用时需要传 | `(e: React.MouseEvent) => void` |         |
| children  |                    | `ReactNode ReactNode[]`         |         |
| disabled  |                    | `boolean`                       | false   |
