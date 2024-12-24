import React, { createContext } from 'react';
import cn from '../../utils/cn';

export type TButtonLinkStyle =
  | 'gray'
  | 'black'
  | 'primary'
  | 'error'
  | 'modifiable';

type TLinkSize = 'm' | 's';
export type TButtonProps = {
  href?: string;
  target?: string;
  className?: string;
  underline?: boolean;
  size?: TLinkSize;
  style?: TButtonLinkStyle;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const LinkButtonCtx = createContext<{ size: TLinkSize }>(null as any);

export default function LinkButton({
  href,
  target,
  className,
  size = 'm',
  style = 'primary',
  disabled = false,
  underline = false,
  children,
  onClick,
}: TButtonProps) {
  const sizeCls = cn({
    'label-s': size === 'm',
    'label-xs': size === 's',
  });

  // state disabled
  const disabledCls = 'disabled:text-text-disabled';

  const grayCls = 'text-text-sub focus:text-text-strong';

  const blackCls = 'text-text-strong';

  const primaryCls =
    'text-primary-base hover:text-primary-darker focus:text-primary-base';

  const errorCls =
    'text-error-base hover:underline hover:text-red-700 focus:underline focus:text-error-base';

  const colorMap = {
    gray: grayCls,
    black: blackCls,
    primary: primaryCls,
    error: errorCls,
    modifiable: '',
  };

  const props = {
    disabled: disabled,
    onClick: onClick,
    className: cn(
      'inline-flex gap-1',
      'underline-offset-[3px]	hover:underline focus:underline',
      underline && !disabled && 'underline',
      sizeCls,
      disabled ? disabledCls : colorMap[style],
      className,
    ),
  };

  return (
    <LinkButtonCtx.Provider value={{ size }}>
      {href ? (
        <a href={href} target={target} className={props.className}>
          {children}
        </a>
      ) : (
        <button type="button" {...props}>
          {children}
        </button>
      )}
    </LinkButtonCtx.Provider>
  );
}
