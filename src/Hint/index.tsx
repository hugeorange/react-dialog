import { RiInformationFill } from '@remixicon/react';
import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import { InputCtx } from '../Input/components/Input';
import cn from '../utils/cn';

type TProps = {
  className?: string;
  showIcon?: boolean; // 是否展示默认 info-fill icon
  icon?: ReactElement; // 展示自定义 icon
  error?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

export default function Hint({
  className,
  showIcon,
  icon,
  error,
  children,
  disabled,
}: TProps) {
  // ctx 仅在 input 组件内使用有效
  const isError = useContext(InputCtx)?.error;

  let textColor = 'text-text-sub';
  let iconColor = 'text-icon-soft';
  if (isError || error) {
    textColor = 'text-error-base';
    iconColor = 'text-error-base';
  }
  if (disabled) {
    textColor = 'text-text-disabled';
  }

  let iconContent: ReactElement | undefined;
  if (showIcon) {
    iconContent = <RiInformationFill />;
  }
  if (icon) {
    iconContent = icon;
  }
  return (
    <div
      className={cn(
        'paragraph-xs flex items-center gap-1',
        textColor,
        className,
      )}
    >
      {iconContent &&
        cloneElement(iconContent, {
          className: `${iconColor} ${iconContent.props.className || ''}`,
          size: iconContent.props.size || 16,
        })}
      {children}
    </div>
  );
}
