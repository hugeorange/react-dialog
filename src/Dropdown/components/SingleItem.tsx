import React, { ForwardedRef, forwardRef } from 'react';
import * as Checkbox from '../../Checkbox';
import * as Radio from '../../Radio';
import Item from './Item';

type TSingleItemProps = {
  className?: string;
  type?: 'radio' | 'checkbox';
  checked?: boolean;
  disabled?: boolean;
  label?: string | React.ReactNode;
  subLabel?: string | React.ReactNode;
  description?: string | React.ReactNode;
  leftEle?: string | React.ReactNode;
  rightEle?: string | React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default forwardRef<HTMLDivElement, TSingleItemProps>(SingleItem);

function SingleItem(
  {
    className,
    type,
    checked,
    disabled,
    label,
    subLabel,
    description,
    leftEle,
    rightEle,
    onChange,
  }: TSingleItemProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <Item className={className} ref={ref}>
      <div className="flex items-center gap-3">
        {type === 'radio' && (
          <Radio.Root
            className="w-5"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        {type === 'checkbox' && (
          <Checkbox.Root
            className="w-5"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        {leftEle}
        {!!label || !!subLabel ? (
          <div className="flex-1 flex flex-col gap-1">
            <div>
              {!!label && (
                <span className="label-s text-text-strong">{label}</span>
              )}
              {!!subLabel && (
                <span className="pl-1 paragraph-xs text-text-soft">
                  {subLabel}
                </span>
              )}
            </div>
            {!!description && (
              <span className="paragraph-xs text-text-sub">{description}</span>
            )}
          </div>
        ) : null}

        {rightEle}
      </div>
    </Item>
  );
}
