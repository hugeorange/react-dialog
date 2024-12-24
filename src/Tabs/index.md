---
title: Tabs
order: 1
group:
  title: base
  order: 1
---

<code src="./demo/basic.tsx">Tabs.Card</code>

---

<code src="./demo/hmenu.tsx">Tabs.HMenu</code>

---

<code src="./demo/vmenu.tsx">Tabs.VMenu</code>

## API Tabs

| Props       | Description                  | Type                                                | Default |
| ----------- | ---------------------------- | --------------------------------------------------- | ------- |
| className   | 传入的样式                   | `string`                                            |         |
| value       | 当前激活项                   | `string`                                            | -       |
| items       | 全部选项                     | `TTabsItems[]`                                      | -       |
| showTopLine | HMenu 情况下是否显示顶部线条 | `boolean`                                           | true    |
| onChange    | 仅单独使用时需要传           | `(e: React.ChangeEvent<HTMLInputElement>) => void;` |         |

## API TTabsItems

| Props     | Description         | Type           | Default |
| --------- | ------------------- | -------------- | ------- |
| title     | label 内容          | `ReactNode`    |         |
| leftIcon  |                     | `ReactElement` | -       |
| rightIcon |                     | `ReactElement` | -       |
| value     | 当前选项值          | `string`       |         |
| disabled  | 仅对 Tabs.Card 有效 | `boolean`      | -       |
