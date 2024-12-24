import React, { useContext, useId } from 'react';
import cn from '../../utils/cn';
import { RadioGroupContext } from './Group';
import { RadioIcon } from './icon';

type TRadioProps = {
  className?: string;
  value?: string; // 仅在 group 时有用
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactElement;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'label' | 'card';
  isFlip?: boolean;
  subLabel?: React.ReactNode;
  badge?: React.ReactElement;
  desc?: React.ReactNode;
};
export default function Radio({
  className,
  value,
  onChange,
  leftIcon,
  disabled = false,
  type = 'label',
  isFlip = false,
  checked,
  subLabel,
  badge,
  desc,
  children,
}: TRadioProps) {
  const id = useId();

  const groupCtx = useContext(RadioGroupContext);

  const isChecked = groupCtx ? groupCtx.value === value : checked;
  const isDisabled = groupCtx?.disabled || disabled;
  const name = groupCtx?.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    groupCtx?.onChange?.(e.target.value);
  };

  const cardCls = cn(
    'p-4 rounded-12 border bg-bg-white shadow-xs',
    isChecked && !isDisabled ? '!border-primary-base' : 'border-stroke-soft',
    {
      'hover:bg-bg-weak hover:border-bg-weak hover:shadow-transparent':
        !isDisabled,
    },
  );

  const fontColor = {
    label: isDisabled ? 'text-text-sub' : 'text-text-strong',
    subLabel: isDisabled ? 'text-text-soft' : 'text-text-sub',
    desc: isDisabled ? 'text-text-soft' : 'text-text-sub',
  };

  const flipRadio = isFlip || type === 'card';

  const renderDesc = () => {
    if (!desc) return null;
    return (
      <div
        className={cn('paragraph-xs mt-1', fontColor.desc, {
          'ml-6': !flipRadio && type === 'label',
        })}
      >
        {desc}
      </div>
    );
  };

  return (
    <div className={className}>
      <div
        className={cn('ru-radio relative flex', {
          [cardCls]: type === 'card',
        })}
      >
        <input
          type="radio"
          id={id + '-radio'}
          name={name}
          disabled={isDisabled}
          className={cn('appearance-none absolute left-0 top-0 w-full h-full', {
            'cursor-pointer': !isDisabled,
          })}
          checked={isChecked}
          value={value}
          onChange={handleChange}
        />
        {leftIcon}
        {!flipRadio && <RadioIcon disabled={isDisabled} checked={isChecked} />}
        <div
          className={cn('flex flex-1 justify-start flex-col', {
            'ml-1': !flipRadio,
            'ml-4': !!leftIcon,
          })}
        >
          <label
            htmlFor={id + '-radio'}
            className={cn('paragraph-s', 'flex items-center', fontColor.label)}
          >
            {children}
            {subLabel && (
              <span className={cn('paragraph-xs ml-1', fontColor.subLabel)}>
                {subLabel}
              </span>
            )}
            {badge && <span className="ml-1">{badge}</span>}
          </label>
          {/* card label desc 位置不一样 */}
          {type === 'card' && renderDesc()}
        </div>
        {flipRadio && <RadioIcon disabled={isDisabled} checked={isChecked} />}
      </div>
      {type === 'label' && renderDesc()}
    </div>
  );
}
