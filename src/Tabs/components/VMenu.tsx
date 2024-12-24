import React, { ReactNode } from 'react';
import cn from '../../utils/cn';
import { TTabsProps } from '../index';

export default function VMenu<T extends string>({
  className,
  label,
  value,
  style = 'card',
  items,
  onChange,
}: TTabsProps<T> & { style?: 'card' | 'list'; label?: ReactNode }) {
  return (
    <div className={cn(className, 'ru-tabs-v-menu', style)}>
      {label && (
        <div className="px-2 py-1 subheading-xs text-text-sub">{label}</div>
      )}
      {items.map((item) => (
        <div
          key={item.value}
          className={cn('menu-item', {
            active: item.value === value,
          })}
          onClick={() => onChange(item.value)}
        >
          {item.leftIcon}
          {item.title && <div className="flex-1 label-s">{item.title}</div>}
          {item.rightIcon}
        </div>
      ))}
    </div>
  );
}
