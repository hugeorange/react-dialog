---
title: Dropdown
order: 1
group:
  title: base
  order: 1
---

## Examples

<code src="./demo/basic.tsx">Basic</code>

## TDropdownProps

| Name              | Description                                 | Type                                                  | Default |
| ----------------- | ------------------------------------------- | ----------------------------------------------------- | ------- |
| className         |                                             | `string`                                              | -       |
| placement         | dropdown 展开方向（此项不传会自动计算位置） | `up down`                                             | -       |
| listHeight        | dropdown modal 高度, 超出滚动 null 内容撑开 | `number null`                                         | 252     |
| multiple          | 多选                                        | `boolean`                                             | false   |
| options           | dropdown item                               | `TOption[]`                                           | -       |
| value             | 当前选中项                                  | `undefined string  string[]`                          | -       |
| onChange          | 选中回调,单选、多选的选中值均用数组包裹     | `(value: string[], option: TOption[]) => void`        | -       |
| dropdownRender    | 自定义除 dropdown item 以外区域的渲染       | `(menu: ReactElement ReactElement[]) => ReactElement` | -       |
| triggerRender     | 自定义 trigger 渲染内容, 参数为选中的内容   | ` (option: TOption[]) => ReactNode`                   | -       |
| showSearch        | 展示筛选输入框                              | `boolean`                                             | -       |
| onSearch          | 模糊搜索时需要                              | `(value: string) => void`                             | -       |
| searchLoading     | 模糊搜索时请求 api loading                  | `boolean`                                             | false   |
| searchPlaceholder | 输入框 placeholder                          | `string`                                              | -       |

## TOption

| Name         | Description                                           | Type                                                     | Default |
| ------------ | ----------------------------------------------------- | -------------------------------------------------------- | ------- |
| value        | 选中值                                                | `string`                                                 | -       |
| label        | 展示内容                                              | ` ReactElement string`                                   | -       |
| searchStr    | 为搜索提供匹配项，不提供则直接用 label 比较           | `string`                                                 |         |
| disabled     |                                                       | `boolean`                                                | -       |
| customRender | 如果传入此项则每一项 dropdown item 则全部由用户自定义 | `(selected: boolean, disabled: boolean) => ReactElement` | -       |

<code src="./demo/group_options.tsx">Group Option</code>

## TOptionsGroupProps

```ts
type TOptionsGroupProps = Merge<TDropdownProps, { options: TOptionGroup[] }>;

// options 参数类型
type TOptionGroup = {
  groupLabel: ReactNode;
  options: TOption[];
};
```

## TApiRequestProps

<code src="./demo/api_search.tsx">Api Request</code>

```ts
type TApiRequestProps = Merge<
  TDropdownProps,
  { api: (inputValue: string) => Promise<TOption[]> }
>;
```

## Compact

<code src="./demo/compact.tsx">Compact</code>

```ts
type TOptionsGroupProps = Omit<
  TDropdownProps,
  | 'multiple'
  | 'showSearch'
  | 'onSearch'
  | 'searchLoading'
  | 'searchPlaceholder'
  | 'children'
> & {
  inline?: boolean;
};
```

## Item

<code src="./demo/single_item.tsx">Single Item</code>

```ts
type TSingleItemProps = {
  className?: string;
  type?: 'radio' | 'checkbox';
  checked?: boolean;
  disabled?: boolean;
  label?: string | React.ReactNode;
  subLabel?: string | React.ReactNode;
  description?: string | React.ReactNode;
  leftEle?: string | React.ReactNode;
  rightEle?: string | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
```
