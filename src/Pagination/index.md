---
title: Pagination
order: 1
group:
  title: base
  order: 1
---

## Examples

<code src="./demo/cell.tsx">Cell</code>

<code src="./demo/basic.tsx">Basic</code>

## TPaginationProps

| Name         | Description                              | Type                      | Default      |
| ------------ | ---------------------------------------- | ------------------------- | ------------ |
| className    |                                          | `string`                  | -            |
| advanced     | 是否展示 total, pageSize                 | `boolean`                 | true         |
| total        | 总数                                     | `number`                  | false        |
| currPage     | 当前页码                                 | `number`                  | -            |
| pageSize     | 每页长度                                 | `number`                  | -            |
| onChange     |                                          | `(page: number) => void`  | -            |
| onSizeChange |                                          | `(value: number) => void` | -            |
| sizeOptions  | pageSize option                          | `TOption[]`               | 10 20 50 100 |
| showBothEnds | 是否显示跳转 first last                  | `boolean`                 | true         |
| type         | 直接使用 Pagination 有此属性, Group 没有 | `basic fullRadius`        | basic        |
