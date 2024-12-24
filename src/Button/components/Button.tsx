import React, { CSSProperties, isValidElement, ReactNode } from 'react';
import Loading from '../../Loading';
import { Merge } from '../../type';
import cn from '../../utils/cn';
import Icon from './Icon';

export type TButtonSize = 'xl' | 'l' | 'm' | 's' | 'xs' | '2xs';
export type TButtonType = 'primary' | 'neutral' | 'error' | 'social';
export type TButtonStyle = 'filled' | 'stroke' | 'lighter' | 'ghost';
export type TButtonProps = Merge<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  {
    className?: string;
    size?: TButtonSize;
    type?: TButtonType;
    style?: TButtonStyle;
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    htmlStyle?: CSSProperties;
    loading?: boolean;
    disabled?: boolean;
    children: ReactNode | ReactNode[];
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  }
>;

// 普通 button
// fancy button
// link button
// social button
// compact button

// button:
// type : primary neutral error
// style: Filled Stroke Lighter Ghost
// state: Default Hover Focus Disabled
// size : X-Large 48 Large 44 Medium 40 Small 36 X-Small 32 2X-Small 28
export default function Button({
  className,
  size = 'm',
  type = 'primary',
  style = 'filled',
  htmlType = 'button',
  htmlStyle,
  loading = false,
  disabled = false,
  children,
  onClick,
  ...args
}: TButtonProps) {
  const roundedCls =
    size === 'xl' || size === 'l' || size === 'm' ? 'rounded-10' : 'rounded-8';
  const disabledCls = 'disabled:text-text-disabled disabled:bg-bg-weak';

  const onlyIcon = isValidElement(children) && children.type === Icon;

  const sizeCls = cn({
    'px-3.5 h-12 gap-1': size === 'xl',
    'px-3 h-11 gap-1': size === 'l',
    'px-2.5 h-10 gap-1': size === 'm',
    'px-2 h-9 gap-1': size === 's',
    'px-1.5 h-8 gap-0.5': size === 'xs',
    'px-1.5 h-7 gap-0.5': size === '2xs',
  });

  const onlyIconSizeCls = cn({
    'w-12 h-12': size === 'xl',
    'w-11 h-11': size === 'l',
    'w-10 h-10': size === 'm',
    'w-9 h-9': size === 's',
    'w-8 h-8': size === 'xs',
    'w-7 h-7': size === '2xs',
  });
  const renderChildren = () => {
    const childArrs = Array.isArray(children) ? children : [children];
    return childArrs.map((child) => {
      if (typeof child === 'string') {
        return (
          <span key={child} className="px-1 label-s">
            {child}
          </span>
        );
      }
      return child;
    });
  };
  return (
    <button
      {...args}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      type={htmlType}
      style={htmlStyle}
      onClick={onClick}
      className={cn(
        'ru-btn',
        disabled ? disabledCls : `btn-${type}-${style}`,
        'inline-flex justify-center items-center',
        onlyIcon ? onlyIconSizeCls : sizeCls,
        roundedCls,
        className,
      )}
    >
      {loading ? <Loading /> : renderChildren()}
    </button>
  );
}
