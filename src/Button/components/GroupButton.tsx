import React, {
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import cn from '../../utils/cn';
import { GroupCtx, TGroupButtonSize } from './Group';
import Icon from './Icon';

type TProps = {
  className?: string;
  size?: TGroupButtonSize;
  value?: string;
  checked?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode | ReactNode[];
  disabled?: boolean;
};
export default function ButtonRadio({
  className,
  size = 's',
  children,
  value,
  checked,
  onClick,
  disabled = false,
}: TProps) {
  const groupCtx = useContext(GroupCtx);

  const isChecked = groupCtx ? groupCtx?.value === value : checked;
  const isDisabled = groupCtx?.disabled || disabled;
  const btnSize = groupCtx?.size || size;

  const sizeCls = getSizeCls(btnSize, children);

  const colorCls = cn(
    'border border-stroke-soft',
    'hover:bg-bg-weak',
    isChecked ? 'text-text-strong bg-bg-weak' : 'text-text-sub bg-bg-white',
  );
  const disabledCls = cn('border-bg-weak bg-bg-weak text-text-disabled');

  const handleClick = (e: React.MouseEvent) => {
    groupCtx?.onChange?.(value!);
    onClick?.(e);
  };

  return (
    <button
      className={cn(
        'ru-group-button',
        'flex items-center justify-center',
        sizeCls,
        isDisabled ? disabledCls : colorCls,
        className,
      )}
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function getSizeCls(
  size: TProps['size'] = 's',
  children: ReactNode | ReactNode[],
) {
  const base = {
    s: 'h-9 label-s gap-2',
    xs: 'h-8 label-s gap-1.5',
    '2xs': 'h-6 label-xs gap-1',
  };

  const onlyIconW = {
    s: 'w-9',
    xs: 'w-8',
    '2xs': 'w-6',
  };

  const noIconW = {
    s: 'px-4',
    xs: 'px-3.5',
    '2xs': 'px-3 ',
  };

  const leftIconW = {
    s: 'pl-2 pr-4',
    xs: 'pl-1.5 pr-3.5',
    '2xs': 'pl-1 pr-3',
  };
  const rightIconW = {
    s: 'pl-4 pr-2',
    xs: 'pl-3.5 pr-1.5',
    '2xs': 'pl-3 pr-1',
  };
  const allIconW = {
    s: 'px-2',
    xs: 'px-1.5',
    '2xs': 'px-1',
  };

  const onlyIcon = isValidElement(children) && children.type === Icon;
  if (onlyIcon) return `${base[size]} ${onlyIconW[size]}`;

  if (!Array.isArray(children)) {
    return `${base[size]} ${noIconW[size]}`;
  }

  const first = children[0] as ReactElement;
  const last = children[children.length - 1] as ReactElement;

  if (first.type === Icon && last.type === Icon) {
    return `${base[size]} ${allIconW[size]}`;
  }
  if (first.type === Icon) {
    return `${base[size]} ${leftIconW[size]}`;
  }
  if (last.type === Icon) {
    return `${base[size]} ${rightIconW[size]}`;
  }
}
