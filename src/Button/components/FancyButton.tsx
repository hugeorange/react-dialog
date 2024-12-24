import React from 'react';
import Loading from '../../Loading';
import cn from '../../utils/cn';

export type TFancyButtonType = 'neutral' | 'primary' | 'error' | 'basic';
export type TFancyButtonSize = 'm' | 's' | 'xs';
export type TFancyButtonProps = {
  className?: string;
  size?: TFancyButtonSize;
  type?: TFancyButtonType;
  htmlStyle?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function FancyButton({
  className,
  size = 'm',
  type = 'primary',
  htmlStyle,
  disabled = false,
  loading = false,
  children,
  onClick,
}: TFancyButtonProps) {
  const roundedCls = size === 'm' ? 'rounded-10' : 'rounded-8';
  const disabledCls = 'disabled:text-text-disabled disabled:bg-bg-weak';
  const sizeCls = cn({
    'p-2.5': size === 'm',
    'p-2': size === 's',
    'p-1.5': size === 'xs',
  });

  return (
    <button
      disabled={disabled || loading}
      type="button"
      style={htmlStyle}
      onClick={onClick}
      className={cn(
        'ru-btn ru-fancy-btn',
        'inline-flex justify-center items-center gap-1',
        disabled ? disabledCls : `btn-${type}`,
        sizeCls,
        roundedCls,
        className,
      )}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}
