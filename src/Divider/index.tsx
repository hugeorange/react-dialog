import React from 'react';
import cn from '../utils/cn';

type TDivider = {
  className?: string;
  // type: line-text 时中间可以放任意 ReactNode
  type?: 'line' | 'line-spacing' | 'line-text' | 'solid-text' | 'text';
  children?: React.ReactNode;
};

export default function Divider({
  className,
  type = 'line',
  children,
}: TDivider) {
  const commonCls = cn(className, 'text-text-soft');
  const bgLineCls = 'bg-bg-soft';

  switch (type) {
    case 'line-text':
      return (
        <div
          className={cn(commonCls, 'subheading-2xs flex gap-2.5 items-center')}
        >
          <div className={cn('flex-1 h-px', bgLineCls)} />
          {children}
          <div className={cn('flex-1 h-px', bgLineCls)} />
        </div>
      );
    case 'line':
      return <div className={cn(commonCls, bgLineCls, 'h-px')}></div>;
    case 'line-spacing':
      return (
        <div className={cn(commonCls, 'py-[1.5px]')}>
          <div className={cn('h-px', bgLineCls)}></div>
        </div>
      );
    case 'text':
      return (
        <div className={cn(commonCls, 'py-1 px-2 subheading-xs')}>
          {children}
        </div>
      );
    case 'solid-text':
      return (
        <div className={cn(commonCls, 'py-1.5 px-5 subheading-xs bg-bg-weak')}>
          {children}
        </div>
      );
  }
}
