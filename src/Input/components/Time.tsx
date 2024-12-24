import React, { useEffect, useState } from 'react';
import { Addon } from './Icon';
import Input, { TCustomInputProps } from './Input';

import dayjs from 'dayjs';
import { Merge } from '../../type';

/**
 * 自动将传递进组件的 12:00:00 格式化为 12:00 AM 或 12:00 PM
 *
 * onChange 函数参数为格式化过后 12:00:00 的字符串
 *
 */

type TTimeInputProps = Merge<
  TCustomInputProps,
  {
    value?: string;
    defaultValue?: string;
    onChange: (time: string) => void;
  }
>;

const formatTime = (time?: string): [string, 'AM' | 'PM'] => {
  if (!time) {
    return ['', 'AM'];
  }
  const currDay = dayjs().format('YYYY-MM-DD');
  // 将输入的时间格式化为 AM/PM 格式
  const formattedTime = dayjs(`${currDay} ${time}`, 'HH:mm:ss').format(
    'hh:mm A',
  );
  return formattedTime.split(' ') as [string, 'AM' | 'PM'];
};

// 将 12 小时制的时间格式化为 24 小时制的 HH:mm:ss
const formatTo24Hour = (timeString: string) => {
  const currDay = dayjs().format('YYYY-MM-DD');
  return dayjs(`${currDay} ${timeString}`).format('HH:mm:ss');
};

export default function Time(props: TTimeInputProps) {
  // value 为完整的时间字符串 12:00:00
  const { value, defaultValue, onChange, className, ...args } = props;
  const isControlled = !!value;
  const defaultTime = formatTime(defaultValue);

  const [time, setTime] = useState(defaultTime[0]);
  const [type, setType] = useState<'AM' | 'PM'>(defaultTime[1]);

  useEffect(() => {
    if (isControlled) {
      const formattedTime = formatTime(value);
      setTime(formattedTime[0]);
      setType(formattedTime[1]);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // 移除所有非数字和冒号字符
    input = input.replace(/[^\d:]/g, '');

    // 自动添加冒号
    if (input.length > 2 && !input.includes(':')) {
      input = `${input.slice(0, 2)}:${input.slice(2)}`;
    }

    // 限制最大长度为 5
    if (input.length > 5) {
      input = input.slice(0, 5);
    }

    // 验证输入是否符合时间格式
    if (isValidTime(input)) {
      setTime(input);
      if (input.length === 5) {
        const val = formatTo24Hour(`${input} ${type}`);
        console.log('val--->', val);
        if (!val.includes('Invalid Date')) {
          onChange(val);
        }
      }
    }
  };

  // 验证 HH:MM 格式
  const isValidTime = (value: string) => {
    const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
    return timePattern.test(value) || value === '' || value.length < 5;
  };

  // 在失焦时自动补全
  const handleBlur = () => {
    let [hours, minutes] = time.split(':');

    if (!hours) hours = '00';
    if (!minutes) minutes = '00';

    // 补全小时和分钟位数，并限制在指定范围
    hours = String(Math.min(Math.max(parseInt(hours, 10), 0), 12)).padStart(
      2,
      '0',
    );

    minutes = String(Math.min(Math.max(parseInt(minutes, 10), 0), 60)).padStart(
      2,
      '0',
    );

    const t = `${hours}:${minutes}`;
    setTime(t);
    onChange(formatTo24Hour(`${t} ${type}`));
  };

  return (
    <Input
      className={className}
      value={time}
      onChange={handleChange}
      onBlur={handleBlur}
      maxLength={5}
      {...args}
    >
      <Addon
        type="after"
        as={
          <div
            className="cursor-pointer"
            onClick={() => {
              const currType = type === 'AM' ? 'PM' : 'AM';
              setType(currType);
              onChange(formatTo24Hour(`${time} ${currType}`));
            }}
          >
            {type}
          </div>
        }
      />
    </Input>
  );
}
