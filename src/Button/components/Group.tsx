import React, { ReactElement } from 'react';

export type TGroupButtonSize = 's' | 'xs' | '2xs';
export type TGroupProp = {
  className?: string;
  size?: TGroupButtonSize;
  children?: ReactElement | ReactElement[];
  value?: string;
  disabled?: boolean;
  onChange?: (e: string) => void;
};

// 定义 context
export const GroupCtx = React.createContext<TGroupProp>(null as any);

export default function Group({
  className,
  size,
  children,
  value,
  onChange,
  disabled,
}: TGroupProp) {
  return (
    <GroupCtx.Provider value={{ value, size, onChange, disabled }}>
      <div className={className}>{children}</div>
    </GroupCtx.Provider>
  );
}
