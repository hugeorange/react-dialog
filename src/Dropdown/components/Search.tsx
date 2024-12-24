import { RiCloseLine, RiSearch2Line } from '@remixicon/react';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '../../Loading';
import { Merge } from '../../type';
import cn from '../../utils/cn';

export type TSearchProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    loading?: boolean;
    placeholder?: string;
    onChange?: (e: string) => void;
  }
>;

export default function Search({
  loading,
  onChange,
  placeholder = 'Search...',
  ...props
}: TSearchProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      className={cn(
        'ru-dropdown-search',
        'p-2 bg-bg-white flex items-center gap-2',
      )}
    >
      <RiSearch2Line size={20} />
      <input
        ref={ref}
        className="flex-1  outline-none appearance-none paragraph-s text-text-strong"
        autoFocus
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e.target.value);
        }}
        {...props}
      />
      {loading && <Loading />}
      {value && !loading && (
        <RiCloseLine
          size={20}
          className="cursor-pointer"
          onClick={() => {
            setValue('');
            onChange?.('');
            ref.current?.focus();
          }}
        />
      )}
    </div>
  );
}
