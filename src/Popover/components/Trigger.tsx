import React, { useContext } from 'react';
import cn from '../../utils/cn';
import { PopoverContext } from './Popover';

type TTriggerProps = {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
};
export default function Trigger({
  className,
  disabled,
  children,
  style,
}: TTriggerProps) {
  const { id, open, onOpenChange } = useContext(PopoverContext);

  return (
    <div
      className={cn(className)}
      id={`popover_trigger_${id}`}
      style={style}
      onClick={() => !disabled && onOpenChange(!open)}
    >
      {children}
    </div>
  );
}
