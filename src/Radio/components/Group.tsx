import React, { ReactElement, useId } from 'react';

export type TRadioGroupProp = {
  className?: string;
  children?: ReactElement | ReactElement[];
  value: string;
  disabled?: boolean;
  onChange: (e: string) => void;
};

// 定义 context
export const RadioGroupContext = React.createContext<
  Omit<TRadioGroupProp, 'className' | 'children'> & { name: string }
>(null as any);

export default function Group({
  className,
  children,
  value,
  onChange,
  disabled,
}: TRadioGroupProp) {
  const id = useId();
  return (
    <RadioGroupContext.Provider
      value={{ value, onChange, disabled, name: `radio-group-${id}` }}
    >
      <div className={className}>{children}</div>
    </RadioGroupContext.Provider>
  );
}
