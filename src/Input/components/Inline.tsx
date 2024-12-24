import { RiCheckLine, RiCloseLine, RiPencilLine } from '@remixicon/react';
import React, { useRef } from 'react';
import { Merge } from '../../type';
import cn from '../../utils/cn';
import { Icon } from './Icon';
import Input, { TCustomInputProps } from './Input';

type TInlineProps = Merge<
  TCustomInputProps,
  {
    isEdit?: boolean;
    onEdit?: (isEdit: boolean) => void;
    onDone?: () => void;
  }
>;

export default function InlineInput({
  isEdit,
  onEdit,
  onDone,
  children,
  ...props
}: TInlineProps) {
  const ref = useRef<HTMLInputElement>(null);
  const childList = Array.isArray(children)
    ? children
    : children
    ? [children]
    : [];
  return (
    <Input
      className={cn('ru-input-inline', props?.className)}
      type="text"
      ref={ref}
      inputClass={cn({ readOnly: !isEdit }, props.inputClass)}
      {...props}
    >
      {[
        ...childList,
        <Icon
          key="icon-after"
          type="after"
          isCustom
          as={
            <div className="flex gap-1 cursor-pointer">
              {!isEdit && (
                <RiPencilLine
                  className="p-0.5"
                  onClick={() => {
                    if (props.disabled) return;
                    onEdit?.(true);
                    ref.current?.focus();
                  }}
                />
              )}
              {isEdit && (
                <>
                  <RiCloseLine
                    className="p-0.5"
                    onClick={() => onEdit?.(false)}
                  />
                  <RiCheckLine className="p-0.5" onClick={onDone} />
                </>
              )}
            </div>
          }
        />,
      ]}
    </Input>
  );
}
