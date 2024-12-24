import React, { useId } from 'react';
import cn from '../../utils/cn';
import usePosArr from '../hooks/usePosArr';
import { TTabsProps } from '../index';

export default function HMenu<T extends string>({
  className,
  showTopLine = true,
  value,
  items,
  onChange,
}: TTabsProps<T>) {
  const id = useId().replace(/:/g, '');
  const wrapId = `#h-menu-${id}`;
  const posArr = usePosArr(wrapId, '.menu-item');
  const curIndex = items.findIndex((item) => item.value === value);
  const curPos = posArr[curIndex] || { left: 0, width: 0 };

  return (
    <div
      id={wrapId.slice(1)}
      className={cn(
        className,
        'ru-tabs-h-menu',
        { 'show-top-line': showTopLine },
        'relative flex gap-6 py-3.5 bg-bg-white',
      )}
    >
      {items.map((item) => (
        <div
          key={item.value}
          className={cn('menu-item', {
            'pointer-events-none': item.disabled,
            active: item.value === value,
          })}
          onClick={() => onChange(item.value)}
        >
          {item.leftIcon}
          {item.title && <div className="label-s">{item.title}</div>}
          {item.rightIcon}
        </div>
      ))}

      <div
        className="bottom-bar"
        style={{
          width: curPos.width + 'px',
          left: curPos.left + 'px',
        }}
      />
    </div>
  );
}

export const MENU_DIVIDE_LINE = {
  title: <div className="w-px h-4 bg-stroke-soft my-0.5"></div>,
  value: 'divide_line' as any,
  disabled: true,
};
