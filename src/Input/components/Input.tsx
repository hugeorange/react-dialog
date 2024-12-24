import React, { ForwardedRef, ReactElement, forwardRef } from 'react';
import Hint from '../../Hint';
import Label from '../../Label';
import { Merge } from '../../type';
import cn from '../../utils/cn';
import { Addon, Icon, isAfter, isBefore } from './Icon';

export type TInputSize = 'm' | 's' | 'xs';

export const InputCtx = React.createContext<{
  hasValue?: boolean;
  error?: boolean;
  size?: TInputSize;
}>(null as any);

export type TInputProp = {
  className?: string;
  placeholder?: string;
  error?: boolean;
  size?: TInputSize;
  inputClass?: string; // 自定义 input 样式
  value?: string;
  children?: ReactElement | ReactElement[];
  onEnter?: (value: string) => void;
};

export type TCustomInputProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  TInputProp
>;

export default forwardRef<HTMLInputElement, TCustomInputProps>(Input);

function Input(
  {
    error,
    size = 'm',
    disabled,
    className,
    inputClass,
    value,
    children,
    onEnter,
    ...args
  }: TCustomInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const childList = Array.isArray(children)
    ? children
    : children
    ? [children]
    : [];
  const InputLabel = childList.find((v) => v.type === Label);
  const InputHint = childList.find((v) => v.type === Hint);
  const beforeIcon = childList.find((v) => v.type === Icon && isBefore(v));
  const afterIcon = childList.find((v) => v.type === Icon && isAfter(v));

  const beforeAddon = childList.find((v) => v.type === Addon && isBefore(v));
  const afterAddon = childList.find((v) => v.type === Addon && isAfter(v));

  const sizeCls = getSizeCls(size, !!beforeAddon, !!afterAddon);

  const inputWrapCls = cn(
    'input-wrap',
    'w-full flex items-center rounded-8',
    { error: !!error, disabled: disabled },
    sizeCls.wrap,
  );

  return (
    <InputCtx.Provider value={{ hasValue: !!value, error: !!error, size }}>
      <div className={cn(className, 'ru-input', 'flex gap-1 flex-col')}>
        {InputLabel}
        <div className={inputWrapCls}>
          {beforeAddon}
          {beforeIcon && (
            <span className={sizeCls.beforeIconCls}>{beforeIcon}</span>
          )}
          <input
            ref={ref}
            className={cn(sizeCls.input, inputClass, 'flex-1')}
            value={value}
            disabled={disabled}
            {...args}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const target = e.target as HTMLInputElement;
                onEnter?.(target.value);
              }
            }}
          />
          {afterIcon && (
            <span className={sizeCls.afterIconCls}>{afterIcon}</span>
          )}
          {afterAddon}
        </div>
        {InputHint}
      </div>
    </InputCtx.Provider>
  );
}

// 辅助函数
export const getSizeCls = (
  size: TInputProp['size'],
  addonBefore: boolean,
  addonAfter: boolean,
) => {
  // 数组顺序严格按照: height、padding-left、padding-right、gap、padding-x
  // 前三个 wrap、 input ，最后一个 addon 样式
  const sizeCls = {
    m: ['h-10', 'pl-3', 'pr-2.5'],
    s: ['h-9', 'pl-2.5', 'pr-2'],
    xs: ['h-8', 'pl-2', 'pr-1.5'],
  };
  const cls = sizeCls[size!];

  const iconCls = {
    beforeIconCls: size === 'xs' ? 'mr-1.5' : 'mr-2',
    afterIconCls: size === 'xs' ? 'ml-1.5' : 'ml-2',
  };
  if (!addonBefore && !addonAfter) {
    return {
      wrap: cls.join(' '),
      input: '',
      ...iconCls,
    };
  }
  if (addonBefore && addonAfter) {
    return {
      wrap: cls[0],
      input: cls[1] + ' ' + cls[2],
      ...iconCls,
    };
  }

  if (addonBefore) {
    return {
      wrap: cls[0] + ' ' + cls[2],
      input: cls[1],
      ...iconCls,
    };
  }

  if (addonAfter) {
    return {
      wrap: cls[0] + ' ' + cls[1],
      input: cls[2],
      ...iconCls,
    };
  }
  return '' as never;
};
