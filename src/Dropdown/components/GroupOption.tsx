import React, { Fragment, ReactElement, ReactNode } from 'react';
import { Merge } from '../../type';
import Dropdown, { TDropdownProps, TOption } from './Dropdown';

type TOptionGroup = {
  groupLabel: ReactNode;
  options: TOption[];
};

type TOptionsGroupProps = Merge<TDropdownProps, { options: TOptionGroup[] }>;

// 利用 dropdownRender 实现的 group options 形式的 dropdown
export default function OptionGroup({ options, ...args }: TOptionsGroupProps) {
  const formatOptions = () => {
    return options.reduce(
      (acc: TOption[], cur) => [...acc, ...cur.options],
      [],
    );
  };

  // 用于渲染 group label
  const getGroupLabel = (text: ReactNode) => {
    return <div className="p-2 paragraph-s text-text-soft">{text}</div>;
  };

  const renderChildren = (menu: ReactElement | ReactElement[]) => {
    if (!Array.isArray(menu)) return menu;
    let arr: any[] = [];
    options.forEach((v) => {
      const currMenu = menu.splice(0, v.options.length);
      arr = [...arr, getGroupLabel(v.groupLabel), ...currMenu];
    });
    return (
      <>
        {arr.map((v, idx) => (
          <Fragment key={idx}>{v}</Fragment>
        ))}
      </>
    );
  };
  return (
    <Dropdown
      {...args}
      options={formatOptions()}
      dropdownRender={(menu) => renderChildren(menu)}
    />
  );
}
