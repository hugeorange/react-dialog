import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import cn from '../../utils/cn';
import { InputCtx } from './Input';

type TIconProps = {
  className?: string;
  as: ReactNode;
  type: 'before' | 'after';
  isCustom?: boolean;
};
export function Icon({ className, as, type, isCustom }: TIconProps) {
  const hasValue = useContext(InputCtx).hasValue;
  if (isCustom) return as;
  return cloneElement(as as ReactElement, {
    className: cn('input-icon', { 'not-filled': !hasValue }, className),
    type,
    size: 20,
  });
}

export function Addon({ className, as }: TIconProps) {
  const size = useContext(InputCtx).size;
  return (
    <span
      className={cn(
        'input-addon',
        {
          'px-2.5': size === 'm',
          'px-2': size === 's',
          'px-1.5': size === 'xs',
        },
        className,
      )}
    >
      {as}
    </span>
  );
}

export const isBefore = (el: ReactElement) => el.props.type === 'before';
export const isAfter = (el: ReactElement) => el.props.type === 'after';
