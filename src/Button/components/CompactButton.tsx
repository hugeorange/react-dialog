import React, { cloneElement } from 'react';
import cn from '../../utils/cn';

export type TCompactButtonProps = {
  className?: string;
  icon: React.ReactElement;
  size?: 'l' | 'm';
  style?: 'stroke' | 'ghost' | 'white';
  isFullRadius?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function CompactButton({
  className,
  icon,
  size = 'm',
  style = 'stroke',
  isFullRadius = false,
  disabled = false,
  onClick,
}: TCompactButtonProps) {
  const roundedCls = isFullRadius ? 'rounded-full' : 'rounded-6';
  const iconSize = size === 'l' ? 20 : 18;
  const disabledCls = 'disabled:text-icon-disabled disabled:bg-transparent';
  const sizeCls = cn({
    'w-6 h-6': size === 'l',
    'w-5 h-5': size === 'm',
  });

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={cn(
        'ru-btn ru-compact-btn',
        'inline-flex justify-center items-center',
        disabled ? disabledCls : style,
        sizeCls,
        roundedCls,
        className,
      )}
    >
      {cloneElement(icon, { size: icon.props.size || iconSize })}
    </button>
  );
}
