import React, { CSSProperties, useState } from 'react';
import * as Checkbox from '../../Checkbox';
import cn from '../../utils/cn';
import SortIcon, { TSortType } from './SortIcon';
import { TAlign } from './Table';

const ALIGN_MAP = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center',
};

export type TCellProps = {
  className?: string;
  style?: CSSProperties;
  align?: TAlign;
  checked?: boolean;
  colspan?: number;
  onChecked?: (checked: boolean) => void;
  children?: React.ReactNode;
};

type THeaderCellProps = Omit<TCellProps, 'checked'> & {
  onSort?: (type: TSortType) => void;
  checked?: boolean | 'indeterminate';
};

// header 单元格
export function HeaderCell({
  children,
  className,
  checked = false,
  onChecked,
  onSort,
  align = 'left',
  style,
}: THeaderCellProps) {
  const [sortType, setSortType] = useState<TSortType>('default');

  const handleClick = () => {
    if (!onSort) return;
    const nextType =
      sortType === 'default' ? 'up' : sortType === 'up' ? 'down' : 'default';
    setSortType(nextType);
    onSort(nextType);
  };
  return (
    <th
      className={cn('px-3 py-2 paragraph-s', className, {
        'cursor-pointer': onSort,
      })}
      style={style}
      onClick={handleClick}
    >
      <div className={cn('flex items-center select-none', ALIGN_MAP[align])}>
        {onChecked && (
          <Checkbox.Root
            className="mr-2.5"
            indeterminate={checked === 'indeterminate'}
            checked={checked === 'indeterminate' ? false : checked}
            onChange={(e) => onChecked?.(e.target.checked)}
          />
        )}
        {children}
        {onSort && <SortIcon className="ml-0.5" type={sortType!} />}
      </div>
    </th>
  );
}

// body 单元格

export function RowCell({
  children,
  className,
  align = 'left',
  checked,
  onChecked,
  style,
  colspan,
}: TCellProps) {
  return (
    <td className={cn(className || 'p-3')} style={style} colSpan={colspan}>
      <div className={cn('flex items-center', ALIGN_MAP[align])}>
        {onChecked && (
          <Checkbox.Root
            className="mr-2.5"
            checked={checked}
            onChange={(e) => onChecked?.(e.target.checked)}
          />
        )}
        {children}
      </div>
    </td>
  );
}
