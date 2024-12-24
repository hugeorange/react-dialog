import React, {
  cloneElement,
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
  useContext,
} from 'react';
import * as Checkbox from '../../Checkbox';
import cn from '../../utils/cn';
import { DropdownContext, TOption } from './Dropdown';

type TItemProps = {
  className?: string;
  actionable?: boolean;
  children: React.ReactNode;
  selected?: boolean; // 是否选中
  customRender?: TOption['customRender']; // item 由用户完全自定义
  disabled?: boolean;
  onChange?: () => void; // 点击 item 回调
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

export default forwardRef<HTMLDivElement, TItemProps>(Item);

function Item(
  {
    className,
    selected = false,
    disabled = false,
    actionable = false,
    children,
    customRender,
    onChange,
    onKeyDown,
  }: TItemProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const ctx = useContext(DropdownContext);

  if (customRender) {
    return cloneElement(customRender(selected, disabled), {
      onClick: disabled ? () => {} : onChange,
    });
  }

  const styleCls = actionable
    ? 'p-4 rounded-12 border border-stroke-soft'
    : 'p-2 rounded-10';
  return (
    <div
      ref={ref}
      tabIndex={disabled ? undefined : 0}
      onKeyDown={onKeyDown}
      className={cn(
        className,
        styleCls,
        'flex items-center gap-2 paragraph-s  bg-bg-white outline-none',
        'focus:bg-bg-weak',
        disabled
          ? 'cursor-not-allowed text-text-disabled !bg-bg-white'
          : 'text-text-strong hover:bg-bg-weak cursor-pointer select-none',
      )}
      onClick={disabled ? (f) => f : onChange}
    >
      {ctx?.multiple ? (
        <Checkbox.Root checked={selected} disabled={disabled} />
      ) : null}
      <div className="flex-1">{children}</div>
    </div>
  );
}
