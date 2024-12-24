import { RiLoader3Fill } from '@remixicon/react';
import React from 'react';
import cn from '../utils/cn';

// 此组件暂时还没有设计图，暂时随便写一下

type TLoading = {
  className?: string;
  size?: number;
};
export default function Loading({ className, size = 20 }: TLoading) {
  return (
    <RiLoader3Fill
      className={cn('loading-icon-spinner', className)}
      size={size}
    />
  );
}
