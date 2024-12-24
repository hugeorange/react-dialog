import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from '@remixicon/react';
import React, { ReactElement } from 'react';
import { Compact, TOption } from '../../Dropdown';
import cn from '../../utils/cn';

export type TActionValue = {
  onClick: () => void;
  disabled: boolean;
  icon: ReactElement;
};
export type TActionArrow = {
  bothEnds: Array<TActionValue | null>;
  prevOrNext: Array<TActionValue | null>;
};

type TGetPageItem = (page: number | string) => ReactElement;

export type TWrapProps = {
  className?: string;
  advanced?: boolean; // 显示总条数和页码尺寸切换器
  total: number;
  currPage: number; // 当前页码
  pageSize?: number;
  onChange: (page: number) => void;
  onSizeChange?: (value: number) => void; // 页码大小切换
  sizeOptions?: TOption[];
  showBothEnds?: boolean; // 直接跳转 first 和 last
  children: (
    // 分页器左右箭头
    action: TActionArrow,
    // 获取分页器数据 (分页器 item 组件)
    renderCell: (getPageItem: TGetPageItem) => ReactElement[],
  ) => ReactElement;
};

const options = [
  { label: '10 / page', value: '10' },
  { label: '20 / page', value: '20' },
  { label: '50 / page', value: '50' },
  { label: '100 / page', value: '100' },
];
export default function Wrap({
  className,
  currPage = 1,
  onChange,
  pageSize,
  onSizeChange,
  advanced = true,
  total = 0,
  sizeOptions = options,
  children,
}: TWrapProps) {
  const size = pageSize || +sizeOptions[0].value;
  const pages = Math.ceil(total / size);

  const renderCell = (getPageItem: TGetPageItem) => {
    const arr = [...Array(pages)];
    const cells: ReactElement[] = [];

    arr.forEach((_, i) => cells.push(getPageItem(i + 1)));
    if (cells.length <= 6) return cells;

    if (currPage <= 4) {
      return [...cells.slice(0, 5), getPageItem('...'), getPageItem(pages)];
    }
    if (currPage > 4 && currPage < pages - 3) {
      return [
        getPageItem(1),
        getPageItem('...-key1'),
        getPageItem(currPage - 1),
        getPageItem(currPage),
        getPageItem(currPage + 1),
        getPageItem(currPage + 2),
        getPageItem('...key2'),
        getPageItem(pages),
      ];
    }
    if (currPage >= pages - 5) {
      return [
        getPageItem(1),
        getPageItem('...'),
        getPageItem(pages - 4),
        getPageItem(pages - 3),
        getPageItem(pages - 2),
        getPageItem(pages - 1),
        getPageItem(pages),
      ];
    }
    return [];
  };

  const forward = (disabled?: boolean, bothEnds?: boolean) => {
    return {
      onClick: () => onChange(bothEnds ? pages : currPage + 1),
      disabled: disabled || false,
      icon: bothEnds ? <RiArrowRightDoubleLine /> : <RiArrowRightSLine />,
    };
  };

  const back = (disabled?: boolean, bothEnds?: boolean) => {
    return {
      onClick: () => onChange(bothEnds ? 1 : currPage - 1),
      disabled: disabled || false,
      icon: bothEnds ? <RiArrowLeftDoubleLine /> : <RiArrowLeftSLine />,
    };
  };

  const renderArrow = (): TActionArrow => {
    if (pages === 1) {
      return { bothEnds: [null, null], prevOrNext: [null, null] };
    }

    if (currPage === 1) {
      return {
        bothEnds: [back(true, true), forward(false, true)],
        prevOrNext: [back(true), forward(false)],
      };
    }
    if (currPage === pages) {
      return {
        bothEnds: [back(false, true), forward(true, true)],
        prevOrNext: [back(false), forward(true)],
      };
    }
    return {
      bothEnds: [back(false, true), forward(false, true)],
      prevOrNext: [back(false), forward(false)],
    };
  };

  const action = renderArrow();
  return (
    <div
      className={cn(
        'ru-pagination',
        'flex justify-between items-center',
        className,
      )}
    >
      {advanced && (
        <div className="paragraph-s text-text-sub">{total} results</div>
      )}
      {children(action, (getPageItem: TGetPageItem) => renderCell(getPageItem))}
      {advanced && (
        <Compact
          value={size + ''}
          size="xs"
          panelCls="w-28"
          options={sizeOptions}
          onChange={(val) => {
            onSizeChange?.(+val);
            onChange(1);
          }}
        />
      )}
    </div>
  );
}
