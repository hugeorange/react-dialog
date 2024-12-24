import React from 'react';
import Hint from '../../Hint';
import Label from '../../Label';
import { Merge } from '../../type';
import cn from '../../utils/cn';
import { TInputProp } from './Input';

export type TTextAreaProps = Omit<TInputProp, 'size' | 'label' | 'hint'>;

export type TCustomAreaProps = Merge<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  TTextAreaProps
>;

export default function Textarea({
  error,
  disabled,
  className,
  inputClass,
  value,
  maxLength,
  children,
  ...args
}: TCustomAreaProps) {
  const childList = Array.isArray(children)
    ? children
    : children
    ? [children]
    : [];
  const sizeCls = {
    wrap: 'py-2.5 pl-3 pr-2.5',
    input: 'min-h-[92px]',
  };

  const inputWrapCls = cn(
    'input-wrap',
    'w-full flex items-center rounded-8',
    { error: !!error, disabled: disabled },
    sizeCls.wrap,
  );

  const renderChildren = () => {
    return (
      <div
        className={cn(
          'subheading-2xs',
          'absolute bottom-2.5 right-[30px]',
          disabled
            ? 'text-text-disabled'
            : error
            ? 'text-error-base'
            : 'text-text-soft',
        )}
      >
        {maxLength ? `${value?.length || 0}/${maxLength}` : ''}
      </div>
    );
  };
  const InputLabel = childList.find((v) => v.type === Label);
  const InputHint = childList.find((v) => v.type === Hint);
  return (
    <div className={cn(className, 'ru-input', 'flex gap-1 flex-col')}>
      {InputLabel}
      <div className={cn(inputWrapCls, 'relative')}>
        <textarea
          className={cn(sizeCls.input, inputClass)}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          {...args}
        />
        {renderChildren()}
      </div>
      {InputHint}
    </div>
  );
}
