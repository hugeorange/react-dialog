---
title: Table
order: 1
group:
  title: base
  order: 1
---

## Examples

<code src="./demo/basic.tsx">Basic</code>

## TTableProps

| Name       | Description                                                                      | Type                              | Default |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------- | ------- |
| className  |                                                                                  | `string`                          | -       |
| width      | 指定 table 宽度，用于内容过长时可左右滚动宽度，默认为 100%，指定时 sticky 会失效 | `number`                          |         |
| columns    |                                                                                  | `TColumn<T>[]`                    |         |
| data       |                                                                                  | `T[]`                             |         |
| onClickRow | 点击某一行                                                                       | `(row: T, index: number) => void` |         |
| onSelect   | 第一列出现复选框 参数为选中项的 key                                              | `(arr: string[]) => void`         |         |
| stickyTop  | 开启表头 sticky                                                                  | `number`                          |         |
| footer     | 底部区域 放置分页等                                                              | `ReactNode`                       |         |
| loading    | 表格数据加载中                                                                   | `boolean`                         |         |

## TColumn

| Name   | Description                    | Type                                                  | Default   |
| ------ | ------------------------------ | ----------------------------------------------------- | --------- |
| key    | 列取值的 key                   | `string`                                              | -         |
| title  | 列表头                         | `ReactNode`                                           | -         |
| align  |                                | `TAlign`                                              | -         |
| width  | 指定列宽度                     | `number`                                              | -         |
| render | 自定义列单元格显示             | `(value: string, row: T, index: number) => ReactNode` | -         |
| onSort | 列排序函数                     | `(type: TSortType, key: string) => void`              | -         |
| onCell | 返回指定行当前列 td 的 colspan | `(row: T, index: number) => number`                   | undefined |
