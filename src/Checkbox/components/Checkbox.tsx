import React, { useContext, useId } from 'react';
import cn from '../../utils/cn';
import { CheckboxGroupContext } from './Group';
import { CheckboxIcon } from './icon';

type TCheckboxProps = {
  className?: string;
  indeterminate?: boolean; // 中间状态，仅单独使用存在
  value?: string;
  checked?: boolean;
  toggle?: boolean; // 是否展示位 switch toggle
  loading?: boolean; // 如果是在点击时请求 api 则将其行为变为 disabled
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
export default function Checkbox({
  className,
  value,
  indeterminate,
  onChange,
  toggle = false,
  loading = false,
  leftIcon,
  disabled = false,
  type = 'label',
  isFlip = false,
  checked,
  subLabel,
  badge,
  desc,
  children,
}: TCheckboxProps) {
  const id = useId();
  const groupCtx = useContext(CheckboxGroupContext);

  // 使用 group 时必定会有 value
  const isChecked = groupCtx ? groupCtx.value.includes(value!) : checked;
  const isDisabled = groupCtx?.disabled || disabled;
  const name = groupCtx?.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);

    if (groupCtx) {
      const valueArr = groupCtx.value;
      if (e.target.checked) {
        valueArr.push(e.target.value);
      } else {
        const index = valueArr.indexOf(e.target.value);
        valueArr.splice(index, 1);
      }
      groupCtx.onChange?.([...valueArr]);
    }
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

  const flipCheckbox = isFlip || type === 'card';

  const renderDesc = () => {
    if (!desc) return null;
    return (
      <div
        className={cn('paragraph-xs mt-1', fontColor.desc, {
          'ml-6': !flipCheckbox && type === 'label',
        })}
      >
        {desc}
      </div>
    );
  };

  return (
    <div className={className}>
      <div
        className={cn('ru-checkbox relative flex', {
          [cardCls]: type === 'card',
          'pointer-events-none': loading,
        })}
      >
        <input
          type="checkbox"
          id={id + '-checkbox'}
          name={name}
          disabled={isDisabled}
          aria-checked={isChecked}
          aria-disabled={isDisabled}
          className={cn('appearance-none absolute left-0 top-0 w-full h-full', {
            'cursor-pointer': !isDisabled,
          })}
          checked={isChecked}
          value={value}
          onChange={handleChange}
        />
        {leftIcon}
        {!flipCheckbox && (
          <CheckboxIcon
            toggle={toggle}
            disabled={isDisabled}
            checked={isChecked}
            indeterminate={indeterminate}
          />
        )}
        <div
          className={cn({
            'ml-1': !flipCheckbox,
            'ml-4': !!leftIcon,
          })}
        >
          <label
            htmlFor={id + '-checkbox'}
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
        {flipCheckbox && (
          <CheckboxIcon
            className="ml-auto"
            toggle={toggle}
            disabled={isDisabled}
            checked={isChecked}
            indeterminate={indeterminate}
          />
        )}
      </div>
      {type === 'label' && renderDesc()}
    </div>
  );
}
