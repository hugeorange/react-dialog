import React, { ReactElement, useId } from 'react';

export type TCheckboxGroupProp = {
  className?: string;
  children?: ReactElement | ReactElement[];
  value: string[];
  disabled?: boolean;
  onChange: (value: string[]) => void;
};

// 定义 context
export const CheckboxGroupContext = React.createContext<
  Omit<TCheckboxGroupProp, 'className' | 'children'> & { name: string }
>(null as any);

export default function Group({
  className,
  children,
  value,
  onChange,
  disabled,
}: TCheckboxGroupProp) {
  const id = useId();
  return (
    <CheckboxGroupContext.Provider
      value={{ value, onChange, disabled, name: `checkbox-group-${id}` }}
    >
      <div className={className}>{children}</div>
    </CheckboxGroupContext.Provider>
  );
}
