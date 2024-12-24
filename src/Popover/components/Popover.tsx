import React, { ReactNode, useEffect, useId, useRef, useState } from 'react';
import cn from '../../utils/cn';

export const PopoverContext = React.createContext<{
  id: string;
  action: 'hover' | 'click';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>(null as any);

export type TPopoverProps = {
  className?: string;
  children: ReactNode;
  action?: 'hover' | 'click';
  open?: boolean; // 受控模式
  defaultOpen?: boolean; // 非受控模式
  onOpenChange?: (open: boolean) => void;
};

export default function Popover({
  className,
  children,
  action = 'click',
  open,
  defaultOpen = false,
  onOpenChange,
}: TPopoverProps) {
  const id = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  // 组件状态
  const [dOpen, setDOpen] = useState(defaultOpen || open || false);
  // 用 ref 保存 open 状态，以供 document 事件内使用
  const openRef = useRef<boolean>(defaultOpen || open || false);
  const isControlled = open !== undefined;

  useEffect(() => {
    openRef.current = isControlled ? open! : dOpen;
    if (isControlled) {
      setDOpen(open!);
    }
  }, [open, dOpen, isControlled]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        openRef.current &&
        wrapRef.current &&
        !wrapRef.current.contains(e.target as any)
      ) {
        handleOpenChange?.(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (!isControlled) {
      setDOpen(open);
    }
    onOpenChange?.(open);
  };

  return (
    <PopoverContext.Provider
      value={{ id, action, open: dOpen, onOpenChange: handleOpenChange }}
    >
      <div
        className={cn('relative', className)}
        id={`popover_${id}`}
        ref={wrapRef}
        onMouseEnter={
          action === 'hover' ? () => handleOpenChange?.(true) : undefined
        }
        onMouseLeave={
          action === 'hover' ? () => handleOpenChange?.(false) : undefined
        }
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
}
