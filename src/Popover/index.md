---
title: Popover
order: 1
group:
  title: base
  order: 1
---

## Examples

<code src="./demo/basic.tsx">Basic</code>

<code src="./demo/simple.tsx">Simple</code>

<code src="./demo/drawer-popup.tsx">Drawer Popup</code>

## Popover.Root

| Props        | Description                              | Type                      | Default |
| ------------ | ---------------------------------------- | ------------------------- | ------- |
| className    |                                          | `string`                  |         |
| children     | 传入的 trigger 和 content                | `ReactNode`               | -       |
| action       | trigger 触发方式                         | `'hover'  'click'`        | click   |
| open         | 展示 content，可选参数，设置则为受控模式 | `boolean`                 | false   |
| onOpenChange | content 显示隐藏切换                     | `(open: boolean) => void` |         |

## Popover.Trigger

| Props     | Description               | Type            | Default |
| --------- | ------------------------- | --------------- | ------- |
| className |                           | `string`        | -       |
| children  | 传入的 trigger 和 content | `ReactNode`     | -       |
| style     | trigger 样式              | `CSSProperties` | -       |

## Popover.Content

| Props            | Description                                                                                                               | Type            | Default              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------- |
| className        |                                                                                                                           | `string`        | -                    |
| children         | 传入的 trigger 和 content                                                                                                 | `ReactNode`     | -                    |
| style            | content 除定位以外的样式                                                                                                  | `CSSProperties` | -                    |
| placement        | 展开方向，当空间不足时会自动调整                                                                                          | `TPlacement`    | -                    |
| offset           | trigger content 之间的距离                                                                                                | `number`        | 12                   |
| animateCls       | content 展开动画，[参照 headlessui Transition](https://headlessui.com/react/transition#different-enter-leave-transitions) | `string`        |                      |
| showArrow        | 是否展示箭头                                                                                                              | `boolean`       | false                |
| arrowSize        | 指定 svg 高度 l: 8 m: 6 s: 4,                                                                                             | `l m s`         | -                    |
| arrowCls         | 指定 svg 背景颜色                                                                                                         | `string`        | -                    |
| arrowBorderColor | css color                                                                                                                 | `string`        | 'var(--stroke-soft)' |

```ts
export type TPlacement =
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'topRight'
  | 'top'
  | 'topLeft'
  | 'rightBottom'
  | 'right'
  | 'rightTop'
  | 'leftBottom'
  | 'left'
  | 'leftTop';
```
