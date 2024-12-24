import {
  RiAddLine,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiMailLine,
  RiSearch2Line,
  RiSubtractLine,
} from '@remixicon/react';
import React, { ChangeEvent } from 'react';
import * as Button from '../../Button';
import { Merge } from '../../type';
import { formatAmount, inputPhoneFormat, isNumber } from '../../utils/format';
import { Icon } from './Icon';
import Input, { TCustomInputProps } from './Input';

export function Email(props: TCustomInputProps) {
  const children =
    React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) {
        return child;
      }
    }) || [];
  children.push(<Icon key="before" type="before" as={<RiMailLine />} />);
  return (
    <Input {...props} type="email" inputMode="email">
      {children}
    </Input>
  );
}

export function Search(props: TCustomInputProps) {
  const children =
    React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) {
        return child;
      }
    }) || [];
  children.push(<Icon key="before" type="before" as={<RiSearch2Line />} />);
  return (
    <Input {...props} type="search" inputMode="search">
      {children}
    </Input>
  );
}

export function Password(props: TCustomInputProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const children =
    React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) {
        return child;
      }
    }) || [];
  children.push(<Icon key="before" type="before" as={<RiLock2Line />} />);
  children.push(
    <Icon
      key="after"
      isCustom
      type="after"
      as={
        <span
          className="cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
        </span>
      }
    />,
  );
  return (
    <Input {...props} type={isVisible ? 'text' : 'password'}>
      {children}
    </Input>
  );
}

export function Phone(props: TCustomInputProps) {
  return (
    <Input
      {...props}
      type="tel"
      inputMode="tel"
      onChange={(e) => {
        const newValue = inputPhoneFormat(e.target.value);
        const ev = { target: { value: newValue! } };
        props.onChange?.(ev as React.ChangeEvent<HTMLInputElement>);
      }}
    />
  );
}

// 金额输入框 仅允许输入数值/小数点/负号
type TAmountProps = Merge<
  TCustomInputProps,
  {
    precision?: number; // 数值精度
    min?: number; // 最大值
    max?: number; // 最小值
    format?: boolean; // 金额格式为 1,234,567.89
  }
>;

// 金额没有负数最小值为 0，默认保留两位小数
export function Amount(props: TAmountProps) {
  const {
    // 金额默认保留两位精度
    precision = 2,
    min = 0,
    max,
    value,
    onChange,
    onBlur,
    format,
    ...args
  } = props;
  return (
    <Input
      inputMode="numeric"
      autoComplete="off"
      value={format ? formatAmount(value || '') : value}
      onChange={(e) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');
        const ev = { target: { value } };
        onChange?.(ev as React.ChangeEvent<HTMLInputElement>);
      }}
      onBlur={(e) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');
        const ev = { target: { value } };
        if (isNumber(value)) {
          if (min && Number(value) < min) {
            ev.target.value = min.toFixed(precision);
          } else if (max && Number(value) > max) {
            ev.target.value = max.toFixed(precision);
          } else {
            ev.target.value = Number(value).toFixed(precision);
          }
        } else {
          ev.target.value = min.toFixed(precision);
        }
        onChange?.(ev as React.ChangeEvent<HTMLInputElement>);
        onBlur?.(e);
      }}
      {...args}
    />
  );
}

type TNumericProps = Omit<TAmountProps, 'format'>;

export function Numeric(props: TNumericProps) {
  const {
    // 金额默认保留两位精度
    precision,
    min,
    max,
    value,
    onChange,
    onBlur,
    ...args
  } = props;
  return (
    <Input
      inputMode="numeric"
      autoComplete="off"
      value={value}
      onChange={(e) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
          const ev = { target: { value: inputValue } };
          onChange?.(ev as ChangeEvent<HTMLInputElement>);
        }
      }}
      onBlur={(e) => {
        // '.' at the end or only '-' in the input box.
        const value = e.target.value;
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
          valueTemp = value.slice(0, -1);
        }

        valueTemp = valueTemp.replace(/0*(\d+)/, '$1');
        if (isNumber(valueTemp)) {
          if (min && Number(valueTemp) < min) {
            valueTemp = min + '';
          }
          if (max && Number(valueTemp) > max) {
            valueTemp = max + '';
          }
          if (isNumber(precision)) {
            valueTemp = Number(valueTemp).toFixed(precision);
          }
        }
        // 避免出现 -.3 的情况
        if (valueTemp.includes('-.')) {
          valueTemp = valueTemp.replace('-.', '-0.');
        }

        const ev = {
          target: { value: valueTemp },
        };

        console.log(ev, precision);
        onChange?.(ev as ChangeEvent<HTMLInputElement>);
        onBlur?.(ev as React.FocusEvent<HTMLInputElement>);
      }}
      {...args}
    />
  );
}

// 计数器
type TCounterProps = Merge<
  TCustomInputProps,
  {
    precision?: number;
    min?: number;
    max?: number;
    step?: number;
    value: string;
  }
>;
export function Counter({
  min,
  max,
  step = 1,
  precision = 0,
  value,
  onChange,
  disabled,
  ...args
}: TCounterProps) {
  const handleChange = (action: 'add' | 'subtract') => {
    const res = action === 'add' ? +value + step : +value - step;
    const r = min && res < min ? min : max && res > max ? max : res;
    const ev = { target: { value: r.toFixed(precision) + '' } };
    onChange?.(ev as React.ChangeEvent<HTMLInputElement>);
  };
  return (
    <Numeric
      min={min}
      max={max}
      precision={precision}
      value={value}
      inputClass="text-center"
      onChange={onChange}
      disabled={disabled}
      {...args}
    >
      <Icon
        isCustom
        type="before"
        as={
          <Button.Compact
            disabled={disabled}
            size="l"
            style="ghost"
            icon={<RiSubtractLine />}
            onClick={() => handleChange('subtract')}
          />
        }
      />
      <Icon
        isCustom
        type="after"
        as={
          <Button.Compact
            disabled={disabled}
            size="l"
            style="ghost"
            icon={<RiAddLine />}
            onClick={() => handleChange('add')}
          />
        }
      />
    </Numeric>
  );
}
