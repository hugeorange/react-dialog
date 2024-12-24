import { RiInformationFill } from '@remixicon/react';
import React, { ReactNode } from 'react';
import Tooltip, { TTooltipProps } from '../Tooltip';
import cn from '../utils/cn';

type TProps = {
  className?: string;
  text?: ReactNode;
  subText?: ReactNode;
  required?: boolean;
  info?: ReactNode;
  tooltipProps?: TTooltipProps;
};

export default function Label({
  className,
  text,
  subText,
  required,
  info,
  tooltipProps,
}: TProps) {
  return (
    <div className={cn(className, 'label-s flex text-text-strong gap-px')}>
      {text && <span>{text}</span>}
      {required && <span className="text-primary-base">*</span>}
      {subText && <span className="text-text-sub">{subText}</span>}
      {info === true && (
        <RiInformationFill className="text-icon-disabled" size={16} />
      )}
      {(React.isValidElement(info) || typeof info === 'string') && (
        <Tooltip
          className="flex items-center"
          content={info}
          contentCls="ml-[-10px]"
          placement="bottomLeft"
          mode="light"
          size="xs"
          {...tooltipProps}
        >
          <RiInformationFill className="text-icon-disabled" size={16} />
        </Tooltip>
      )}
    </div>
  );
}
