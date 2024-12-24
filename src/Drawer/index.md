---
title: Drawer
order: 1
group:
  title: base
  order: 1
---

<code src="./demo/basic.tsx">Basic Drawer</code>

<code src="./demo/static.tsx">Static Drawer</code>

### API - TDrawerRoot

| Prop         | Description                        | Type         | Default |
| ------------ | ---------------------------------- | ------------ | ------- |
| className    |                                    | `string`     | -       |
| open         | 控制 modal 显示隐藏 设计为受控组件 | `boolean`    | -       |
| maskClosable | 点击遮罩层是否可以关闭             | `boolean`    | -       |
| onClose      | 关闭回调在其中控制 open            | `() => void` | -       |
| children     | Modal 主体内容                     | `ReactNode`  | -       |

### API - TDrawerHeader

| Prop    | Description             | Type           | Default |
| ------- | ----------------------- | -------------- | ------- |
| size    |                         | `m,s`          | -       |
| icon    | 左上角或上方 icon       | `ReactElement` | -       |
| title   | 标题                    | `ReactNode`    | -       |
| desc    | 描述                    | `ReactNode`    | -       |
| divider | 是否显示分隔线          | `boolean`      | -       |
| onClose | 关闭回调在其中控制 open | `() => void`   | -       |

### API - TDrawerContent

| Prop      | Description    | Type        | Default |
| --------- | -------------- | ----------- | ------- |
| className |                | `string`    | -       |
| children  | Modal 主体内容 | `ReactNode` | -       |

### API - TDrawerFooter

| Prop           | Description                                     | Type                 | Default |
| -------------- | ----------------------------------------------- | -------------------- | ------- |
| children       | 自定义 footer                                   | `React.ReactElement` |         |
| onOk           | 确认按钮事件                                    | `() => void`         |         |
| okBtnProps     | 确认按钮额外的 props                            | `TButtonProps`       |         |
| onCancel       | 取消按钮事件                                    | `() => void`         | onClose |
| cancelBtnProps | 取消按钮额外的 props                            | `TButtonProps`       |         |
| leftEl         | footer 左边内容                                 | `ReactNode`          |         |
| btnStretch     | ok cancel 是否铺满底部 当为 true 时 leftEl 无用 | `boolean`            | false   |
