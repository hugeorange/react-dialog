import React, { ReactNode } from 'react';
import cn from '../../utils/cn';

export type TTooltip = {
  className?: string;
  size: 'xs' | 'xxs' | 'l';
  mode?: 'dark' | 'light';
  content: ReactNode;
};
export default function Content({
  className,
  size,
  mode = 'light',
  content,
}: TTooltip) {
  const sizeMap = {
    xxs: 'paragraph-xs px-1.5 py-0.5 rounded-4',
    xs: 'paragraph-s px-2.5 py-1 rounded-6',
    l: 'p-3 rounded-12',
  };

  const modeMap = {
    light: 'bg-bg-white text-text-strong border border-stroke-soft',
    dark: 'bg-bg-strong text-text-white',
  };
  return (
    <div className={cn(className, sizeMap[size], modeMap[mode])}>{content}</div>
  );
}
