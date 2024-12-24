---
title: Input
order: 1
group:
  title: base
  order: 1
---

<code src="./demo/basic.tsx">Basic Input</code>

### API - 基本使用 `TCustomInputProps`

| Prop         | Description                          | Type                                          | Default |
| ------------ | ------------------------------------ | --------------------------------------------- | ------- |
| className    |                                      | `string`                                      | -       |
| inputClass   | 自定义 input 样式                    | `string`                                      | -       |
| placeholder  |                                      | `string`                                      | -       |
| iconLeft     |                                      | `ReactNode`                                   | -       |
| iconRight    |                                      | `ReactNode`                                   | -       |
| addonBefore  | 带标签的 input 设置前置标签          | `ReactNode`                                   | -       |
| addonAfter   | 带标签的 input 设置后置标签          | `ReactNode`                                   | -       |
| required     | 必填 \* 标记                         | `Boolean`                                     | -       |
| label        | 当为 string 时自动拼接 required 标记 | `ReactElement  string`                        | -       |
| hint         | 底部提示文案                         | `ReactNode`                                   | -       |
| error        | 底部错误提示文案 覆盖掉 hint         | `ReactNode`                                   | -       |
| size         |                                      | `m s xs`                                      | -       |
| ...restProps | 剩余属性为 input 自带属性            | `React.InputHTMLAttributes<HTMLInputElement>` | -       |

<code src="./demo/type.tsx">Type Input</code>

<code src="./demo/time.tsx">Time Input</code>

<code src="./demo/textarea.tsx">Textarea</code>

```ts
// Textarea 类型
export type TTextAreaProps = Omit<
  TInputProp,
  'size' | 'iconLeft' | 'iconRight' | 'addonBefore' | 'addonAfter'
>;

export type TCustomAreaProps = Merge<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  TTextAreaProps
>;
```

<code src="./demo/counter.tsx">Counter</code>

### API - Input.Counter

| Prop         | Description  | Type                | Default |
| ------------ | ------------ | ------------------- | ------- |
| min          | 允许最小值   | `number`            | -       |
| max          | 允许最大值   | `number`            | -       |
| step         | 每步增加数量 | `number`            | -       |
| ...restProps | Input Props  | `TCustomInputProps` | -       |

<code src="./demo/otp.tsx">OTP</code>

### API - Input.OTP

| Prop      | Description | Type                      | Default |
| --------- | ----------- | ------------------------- | ------- |
| className |             | `string`                  | -       |
| value     | 当前值      | `string`                  | -       |
| onChange  |             | `(value: string) => void` | -       |

### API - Input.Counter

| Prop         | Description              | Type                                              | Default |
| ------------ | ------------------------ | ------------------------------------------------- | ------- |
| tags         | 当前显示的 tag 列表      | `TTag[]`                                          | -       |
| onChange     | 当前回车增加的 tag       | `(text: string) => void`                          | -       |
| onDelete     | 点击 close icon 删除 tag | `onDelete?: (item: TTag, index?: number) => void` | -       |
| ...restProps | Input Props              | `TCustomInputProps`                               | -       |

<code src="./demo/inline.tsx">Inline Input</code>

### API - Input.Inline

| Prop         | Description           | Type                        | Default |
| ------------ | --------------------- | --------------------------- | ------- |
| isEdit       | 当前是否在编辑状态    | `boolean`                   | -       |
| onEdit       | 点击 pencil icon 触发 | `(isEdit: boolean) => void` | -       |
| onDone       | 点击 check icon 触发  | `() => void`                | -       |
| ...restProps | Input Props           | `TCustomInputProps`         | -       |
