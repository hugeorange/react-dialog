import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiForbidFill,
} from '@remixicon/react';
import React, { cloneElement } from 'react';
import cn from '../../utils/cn';
import Dot from './Dot';

export type TStatus = 'completed' | 'pending' | 'failed' | 'disabled';
type TStatusBadgeProps = {
  className?: string;
  status?: TStatus;
  style?: 'stroke' | 'light';
  showDot?: boolean; // 显示圆点，不会显示 icon
  icon?: React.ReactElement;
  children: React.ReactNode;
};

const iconMap = {
  completed: <RiCheckboxCircleFill />,
  pending: <RiAlertFill />,
  failed: <RiErrorWarningFill />,
  disabled: <RiForbidFill />,
};
const colorMap = {
  completed: ['text-success-base', 'bg-success-lighter'],
  pending: ['text-warning-base', 'bg-warning-lighter'],
  failed: ['text-error-base', 'bg-error-lighter'],
  disabled: ['text-faded-base', 'bg-faded-lighter'],
};

export default function StatusBadgeProps({
  className,
  status = 'completed',
  style = 'stroke',
  showDot = false,
  icon,
  children,
}: TStatusBadgeProps) {
  const paddingCls = cn(!!icon ? 'px-2' : 'pr-2 pl-1');

  const renderIcon = () => {
    if (showDot) return <Dot r={3} />;
    // 显示四状态默认 icon
    return cloneElement(iconMap[status], { size: 16 });
  };

  return (
    <div
      className={cn(
        className,
        'flex items-center label-xs h-6 rounded-6',
        paddingCls,
        style === 'light' ? colorMap[status] : 'border border-stroke-soft',
      )}
    >
      {!icon ? (
        <span className={cn(colorMap[status][0], 'mr-1')}>{renderIcon()}</span>
      ) : (
        <span className="mr-1">{cloneElement(icon, { size: 16 })}</span>
      )}

      <span
        className={cn({
          'text-text-sub': style === 'stroke',
        })}
      >
        {children}
      </span>
    </div>
  );
}
