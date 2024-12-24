---
title: Badge
order: 1
group:
  title: base
  order: 1
---

# Example

<code src="./demo/basic.tsx">Basic</code>

## API

| Props     | Description    | Type                                                                  | Default |
| --------- | -------------- | --------------------------------------------------------------------- | ------- |
| className | 传入的样式     | `string`                                                              |         |
| style     |                | `'filled', 'light', 'lighter', 'stroke'`                              | filled  |
| size      |                | `m 、s`                                                               | m       |
| isNumber  | 是否仅展示数字 | `boolean`                                                             | false   |
| disabled  |                | `boolean`                                                             | false   |
| color     |                | `'blue' 'orange' 'red' 'green' 'yellow' 'purple' 'sky' 'pink' 'teal'` | gray    |
| children  |                | `ReactNode`                                                           |         |

```ts
// decoration
<Badge.Icon as={<RiFlashlightFill />} />

<Badge.Dot />
```

<code src="./demo/status.tsx">Status</code>

## API

| Props     | Description | Type                                        | Default                                |
| --------- | ----------- | ------------------------------------------- | -------------------------------------- |
| className | 传入的样式  | `string`                                    |                                        |
| status    |             | `'completed' 'pending' 'failed' 'disabled'` | completed                              |
| style     |             | `'stroke' 'light'`                          | stroke                                 |
| showDot   | 显示圆点    | `boolean`                                   | false                                  |
| icon      | 自定义 icon | `ReactElement`                              | icon 存在时，不根据 status 和 dot 显示 |
| children  |             | `ReactNode`                                 |                                        |
