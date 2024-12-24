---
title: Tooltip
order: 1
group:
  title: base
  order: 1
---

<code src="./demo/basic.tsx">Basic</code>

### API

| Prop       | Description           | Type              | Default                         |
| ---------- | --------------------- | ----------------- | ------------------------------- |
| action     | trigger 触发动作      | `'hover' 'click'` | hover                           |
| children   | trigger 主体          | `ReactNode`       | -                               |
| placement  | 展开方向              | `TPlacement`      | top                             |
| alwaysOpen | 是否一直打开          | `boolean`         | -                               |
| className  | tooltip content class | `string`          | -                               |
| size       | content size          | `'xs' 'xxs' 'l'`  | 主要表现在 content padding 不同 |
| mode       | content 两种样式      | `'dark' 'light'`  | light                           |
| content    | content 内容          | `ReactNode`       |                                 |
