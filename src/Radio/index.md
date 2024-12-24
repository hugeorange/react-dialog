---
title: Radio
order: 1
group:
  title: base
  order: 1
---

## Radio 设计为[受控组件](https://zh-hans.react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

<code src="./demo/single.tsx">Single Radio</code>

## API - Radio

| Props     | Description            | Type                                                | Default |
| --------- | ---------------------- | --------------------------------------------------- | ------- |
| className | 传入的样式             | `string`                                            |         |
| value     | 仅在 Group 时需要传    | `string`                                            | -       |
| checked   | 仅单独使用时需要传     | `boolean`                                           | -       |
| onChange  | 仅单独使用时需要传     | `(e: React.ChangeEvent<HTMLInputElement>) => void;` |         |
| type      | 样式                   | `label 、card`                                      | label   |
| leftIcon  | 在 type 为 card 时需要 | `ReactElement`                                      | -       |
| disabled  |                        | `boolean`                                           | false   |
| children  |                        | `ReactNode`                                         |         |
| isFlip    | icon 翻转到后面        | `boolean`                                           | false   |
| subLabel  |                        | `ReactNode`                                         | -       |
| badge     |                        | `ReactElement`                                      | -       |
| desc      |                        | `ReactNode`                                         | -       |

---

<code src="./demo/basic.tsx">Basic</code>

## API - Radio.Group

| Props     | Description                         | Type                            | Default |
| --------- | ----------------------------------- | ------------------------------- | ------- |
| className | 传入的样式                          | `string`                        |         |
| value     | 当前选中的 Radio 的 value 值        | `string `                       | -       |
| onChange  | 切换选中状态                        | `(value: string) => void;`      |         |
| disabled  | 整个 group 下面的 Radio 均 disabled | `boolean`                       | false   |
| children  |                                     | `ReactElement 、ReactElement[]` |         |
| name      | 声明一组 Radio                      | `string`                        |         |

---
