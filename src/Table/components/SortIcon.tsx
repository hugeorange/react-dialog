import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiExpandUpDownFill,
} from '@remixicon/react';
import React from 'react';
import cn from '../../utils/cn';

export type TSortType = 'default' | 'up' | 'down';
type TSortIconProps = {
  className?: string;
  type: TSortType;
};

export default function SortIcon({
  className,
  type = 'default',
}: TSortIconProps) {
  return (
    <div className={cn('w-5 h-5 flex flex-col text-icon-sub', className)}>
      {type === 'default' && <RiExpandUpDownFill size={20} />}
      {type === 'up' && <RiArrowUpSFill size={20} />}
      {type === 'down' && <RiArrowDownSFill size={20} />}
    </div>
  );
}
