---
title: Modal
order: 1
group:
  title: base
  order: 1
---

- 普通 Modal 使用方法

  ```
   <Modal.Root>
    <Modal.Header />
    <Modal.Content />
    <Modal.Footer />
   </Modal.Root>
  ```

  <code src="./demo/basic.tsx">Basic Modal</code>

- Status Modal 采用静态方法调用 `Modal.confirm({...})`
  <code src="./demo/static.tsx">Status Modal</code>

- Static Modal 采用静态方法调用 `Modal.open((show, onClose) => <Modal.OpenContent show={show} onClose={onClose} />)`
  <code src="./demo/static-open.tsx">Static Modal</code>

### API - TModalRoot

| Prop         | Description                        | Type         | Default |
| ------------ | ---------------------------------- | ------------ | ------- |
| className    |                                    | `string`     | -       |
| open         | 控制 modal 显示隐藏 设计为受控组件 | `boolean`    | -       |
| maskClosable | 点击遮罩层是否可以关闭             | `boolean`    | -       |
| onClose      | 关闭回调在其中控制 open            | `() => void` | -       |
| children     | Modal 主体内容                     | `ReactNode`  | -       |

### API - TModalHeader

| Prop    | Description             | Type           | Default |
| ------- | ----------------------- | -------------- | ------- |
| size    |                         | `m,s`          | -       |
| icon    | 左上角或上方 icon       | `ReactElement` | -       |
| title   | 标题                    | `ReactNode`    | -       |
| desc    | 描述                    | `ReactNode`    | -       |
| onClose | 关闭回调在其中控制 open | `() => void`   | -       |

### API - TModalContent

| Prop      | Description    | Type        | Default |
| --------- | -------------- | ----------- | ------- |
| className |                | `string`    | -       |
| children  | Modal 主体内容 | `ReactNode` | -       |

### API - TModalFooter

| Prop           | Description                                     | Type                 | Default |
| -------------- | ----------------------------------------------- | -------------------- | ------- |
| children       | children 存在时则为自定义 footer                | `React.ReactElement` |         |
| onOk           | 确认按钮事件                                    | `() => void`         |         |
| okBtnProps     | 确认按钮额外的 props                            | `TButtonProps`       |         |
| onCancel       | 取消按钮事件                                    | `() => void`         | onClose |
| cancelBtnProps | 取消按钮额外的 props                            | `TButtonProps`       |         |
| leftEl         | footer 左边内容                                 | `ReactNode`          |         |
| btnStretch     | ok cancel 是否铺满底部 当为 true 时 leftEl 无用 | `boolean`            | false   |

### API - confirm Props

```ts
// 过滤掉不需要的 Modal Props
type TFilterModal = Omit<TModalProp, 'open' | 'onClose' | 'children'>;

// Modal.confirm({ ... }) 的参数
type TConfirmParams = {
  type: 'error' | 'warning' | 'success' | 'info';
  align?: 'h' | 'v'; // 对齐方式
  title: React.ReactNode;
  desc?: React.ReactNode;
} & TFilterModal;
```
