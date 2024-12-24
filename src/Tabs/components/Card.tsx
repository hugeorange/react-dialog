import React, { useId } from 'react';
import cn from '../../utils/cn';
import usePosArr from '../hooks/usePosArr';
import { TTabsProps } from '../index';

export default function Card<T extends string>({
  className,
  value,
  items,
  onChange,
}: TTabsProps<T>) {
  const id = useId().replace(/:/g, '');
  const wrapId = `#h-card-menu-${id}`;
  const posArr = usePosArr(wrapId, '.tabs-card-item');
  const curIndex = items.findIndex((item) => item.value === value);
  const curPos = posArr[curIndex] || { left: 0, width: 0 };

  return (
    <div
      id={wrapId.slice(1)}
      className={cn(
        className,
        'ru-tabs-card',
        'relative flex p-1 gap-1 rounded-10 bg-bg-weak',
      )}
    >
      {items.map((item) => (
        <div
          key={item.value}
          className={cn('tabs-card-item', {
            active: value === item.value,
            disabled: item.disabled,
          })}
          onClick={() => !item.disabled && onChange(item.value)}
        >
          {item.leftIcon}
          {item.title && <div className="label-s">{item.title}</div>}
          {item.rightIcon}
        </div>
      ))}
      <div
        className="active-bg"
        style={{
          width: curPos.width + 'px',
          left: curPos.left + 'px',
        }}
      />
    </div>
  );
}
