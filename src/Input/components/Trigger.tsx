import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';
import React, { cloneElement } from 'react';
import cn from '../../utils/cn';

type TTriggerProps = {
  className?: string;
  inline?: boolean; // 是否是 inline 模式
  size?: 'm' | 's' | 'xs';
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  showArrow?: boolean; // 是否显示箭头
  focused?: boolean;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  beforeIcon?: React.ReactElement;
  afterIcon?: React.ReactElement;
  children?: React.ReactNode;
};

export default function Trigger({
  className,
  size = 'm',
  inline = false,
  placeholder,
  error,
  disabled,
  showArrow = true,
  focused = false,
  tabIndex = 0,
  onKeyDown,
  beforeIcon,
  afterIcon,
  children,
}: TTriggerProps) {
  const sizeCls = {
    m: ['h-10', 'pl-3', 'pr-2.5', 'gap-2'],
    s: ['h-9', 'pl-2.5', 'pr-2', 'gap-2'],
    xs: ['h-8', 'pl-2', 'pr-1.5', 'gap-1.5'],
  };

  const getCls = () => {
    if (inline) {
      return cn(
        'inline-flex items-center cursor-pointer gap-0.5',
        'text-text-sub',
        'hover:text-text-strong',
      );
    }
    return cn(
      sizeCls[size],
      'ru-input-trigger',
      'paragraph-s',
      'w-full flex items-center rounded-8 cursor-pointer',
      { focus: focused, error: !!error, disabled: disabled },
    );
  };
  return (
    <div
      className={cn(getCls(), className)}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
    >
      {beforeIcon}
      <div className="flex-1">
        {!children && placeholder && (
          <div className="placeholder">{placeholder}</div>
        )}
        {children}
      </div>
      {afterIcon}
      {showArrow &&
        cloneElement(focused ? <RiArrowUpSLine /> : <RiArrowDownSLine />, {
          size: 20,
          className: cn(
            'pointer-events-none',
            disabled ? 'text-icon-disabled' : 'text-icon-sub',
          ),
        })}
    </div>
  );
}
