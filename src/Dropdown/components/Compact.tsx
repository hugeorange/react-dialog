import React, { useEffect, useState } from 'react';
import { Trigger } from '../../Input';
import * as Popover from '../../Popover';
import cn from '../../utils/cn';
import { TDropdownProps, TOption } from './Dropdown';
import Item from './Item';

type TOptionsGroupProps = Omit<
  TDropdownProps,
  | 'multiple'
  | 'showSearch'
  | 'onSearch'
  | 'searchLoading'
  | 'searchPlaceholder'
  | 'children'
> & {
  size?: 'm' | 's' | 'xs';
  inline?: boolean;
  panelCls?: string;
};

export default function Compact({
  className,
  size,
  listHeight = 252,
  options,
  value,
  inline = false,
  panelCls,
  onChange,
  dropdownRender,
  triggerRender,
}: TOptionsGroupProps) {
  const [showPanel, setShowPanel] = useState(false);
  const [items, setItems] = useState<TOption[]>(options || []);

  useEffect(() => {
    setItems(options || []);
  }, [options]);

  const handleChange = (opt: TOption) => {
    setShowPanel(false);
    return onChange([opt.value], [opt]);
  };

  const renderChildren = () => {
    return items.map((v) => (
      <Item
        key={v.value}
        className="rounded-8"
        selected={v.value === value}
        onChange={() => handleChange(v)}
        disabled={v.disabled}
        customRender={v.customRender}
      >
        {v.label}
      </Item>
    ));
  };

  const renderTrigger = () => {
    // 选中的 options, 单选多选均归纳为 [option]
    const selected = options?.filter((o) => o.value === value);

    // 自定义 trigger
    if (triggerRender) return triggerRender(selected || []);

    // 单选情况
    const item = selected?.[0];
    return item?.label || item?.searchStr;
  };

  return (
    <div className={cn(className, 'ru-dropdown', 'flex gap-1 flex-col')}>
      <Popover.Root open={showPanel} onOpenChange={setShowPanel}>
        <Popover.Trigger>
          <Trigger inline={inline} size={size} focused={showPanel}>
            {renderTrigger()}
          </Trigger>
        </Popover.Trigger>
        <Popover.Content
          className={cn(
            'w-full p-1 text-center bg-bg-white shadow-m rounded-8',
            panelCls,
          )}
          placement="bottom"
          style={{ maxHeight: listHeight || undefined }}
        >
          {dropdownRender ? dropdownRender(renderChildren()) : renderChildren()}
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
