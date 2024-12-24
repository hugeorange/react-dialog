import React, { ReactNode } from 'react';
import cn from '../../utils/cn';

type TCellProps = {
  children: ReactNode;
  fullRadius?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
};
export default function Cell({
  children,
  fullRadius,
  disabled,
  active,
  onClick,
}: TCellProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'ru-pagination-cell',
        'flex items-center justify-center box-content w-5 h-8 px-1.5',
        fullRadius ? 'rounded-full' : 'rounded-8',
        'border border-stroke-soft',
        { active: active },
        { disabled: disabled },
      )}
    >
      {children}
    </div>
  );
}
