import React, {
  KeyboardEvent,
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import Divider from '../../Divider';
import Hint from '../../Hint';
import { Trigger } from '../../Input';
import Label from '../../Label';
import * as Popover from '../../Popover';
import { opacity_y } from '../../Popover/components/Content';
import cn from '../../utils/cn';
import Item from './Item';
import Search from './Search';

// 定义 context
export const DropdownContext = React.createContext<{ multiple?: boolean }>(
  null as any,
);

// 每一个 item 的类型定义
export type TOption = {
  value: string;
  label?: ReactElement | string;
  searchStr?: string; // 为搜索提供匹配项，不提供则直接用 label 比较
  disabled?: boolean;
  // 如果传入此项则每一项 dropdown item 则全部由用户自定义
  customRender?: (selected: boolean, disabled: boolean) => ReactElement;
};

export type TDropdownProps = {
  className?: string;
  listHeight?: number | null; // 弹出面板高度
  multiple?: boolean; // 多选
  disabled?: boolean;
  options?: TOption[];
  value: undefined | string | string[]; // 选中值 单选、多选
  // 单选、多选的选中值均用数组包裹
  onChange: (value: string[], option: TOption[]) => void;
  // 自定义除 dropdown item 以外区域的渲染
  dropdownRender?: (menu: ReactElement | ReactElement[]) => ReactElement;
  // 自定义 trigger 渲染内容
  triggerRender?: (option: TOption[]) => ReactNode;
  showSearch?: boolean;
  // 执行 api 搜索的输入
  onSearch?: (value: string) => void;
  // 执行 api 搜索时的 loading
  searchLoading?: boolean;
  searchPlaceholder?: string;
  children: ReactElement | ReactElement[];
};

export default function Dropdown({
  className,
  showSearch,
  listHeight = 252,
  disabled,
  multiple,
  options,
  value,
  onChange,
  dropdownRender,
  triggerRender,
  onSearch,
  searchLoading,
  searchPlaceholder,
  children = [],
}: TDropdownProps) {
  const [showPanel, setShowPanel] = useState(false);
  const [items, setItems] = useState<TOption[]>(options || []);

  // 响应键盘事件
  const [selectIndex, setSelectIndex] = useState(-1);
  const optionRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setItems(options || []);
  }, [options]);

  useEffect(() => {
    if (showPanel) {
      setSelectIndex(-1);
    }
  }, [showPanel]);

  useEffect(() => {
    if (selectIndex >= 0 && selectIndex < items.length) {
      const el = optionRef.current[selectIndex];
      el?.focus();
    }
  }, [selectIndex]);

  const handleKeyDown = (
    e: KeyboardEvent,
    target: 'trigger' | 'content' | 'search',
  ) => {
    const key = e.key;
    if (key === 'Escape') setShowPanel(false);
    if (target === 'trigger') {
      if (key === 'Enter') setShowPanel(!showPanel);

      if (key === 'ArrowDown') {
        e.preventDefault();
        handleSelect('down', 0);
      }
    }
    if (target === 'content') {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleSelect('down');
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleSelect('up');
      }
      if (e.key === 'Enter') {
        const index = selectIndex % items.length;
        handleChange(items[index]);
      }
    }
    if (target === 'search') {
      if (key === 'ArrowDown') {
        e.preventDefault();
        handleSelect('down', 0);
      }
    }
  };

  // 键盘导航到指定 item
  const handleSelect = (dir: 'up' | 'down', idx?: number) => {
    const toIndex = dir === 'up' ? selectIndex - 1 : selectIndex + 1;
    const index = idx ?? toIndex % items.length;
    if (index < 0 || index >= items.length) return;
    const opt = items[index];
    let newIndex = index;
    if (opt.disabled) {
      newIndex = dir === 'up' ? index - 1 : index + 1;
    }
    setSelectIndex(newIndex);
  };

  const handleChange = (opt: TOption) => {
    const currValue = opt.value;
    // 单选情况
    if (!multiple) {
      setShowPanel(false);
      return onChange([currValue], [opt]);
    }

    // 多选情况
    const valueArr = Array.isArray(value) ? value : [];

    const newValue = valueArr.includes(currValue)
      ? valueArr?.filter((v) => v !== currValue)
      : [...valueArr, currValue];
    const optArr = options?.filter((o) => newValue.includes(o.value)) || [];
    onChange(newValue, optArr);
  };

  const renderChildren = () => {
    if (items?.length) {
      return items.map((v, idx) => {
        const isSelected = Array.isArray(value)
          ? value.includes(v.value)
          : v.value === value;
        return (
          <Item
            key={v.value}
            ref={(el) => (optionRef.current[idx] = el!)}
            selected={isSelected}
            onChange={() => handleChange(v)}
            disabled={v.disabled}
            customRender={v.customRender}
            onKeyDown={(e: KeyboardEvent) => handleKeyDown(e, 'content')}
          >
            {v.label}
          </Item>
        );
      });
    }
    return (
      <div className="paragraph-s text-text-soft p-2">No results found</div>
    );
  };

  const renderTrigger = () => {
    // 选中的 options, 单选多选均归纳为 [option]
    const selected = Array.isArray(value)
      ? options?.filter((o) => value.includes(o.value))
      : options?.filter((o) => o.value === value);

    // 自定义 trigger
    if (triggerRender) return triggerRender(selected || []);

    // 多选情况
    if (multiple && Array.isArray(value) && value?.length) {
      return `${value.length} selected`;
    }
    // 单选情况
    const item = selected?.[0];
    return item?.label || item?.searchStr;
  };

  const handleSearch = (value: string) => {
    // api 搜索情况
    if (onSearch) return onSearch(value);
    // 普通筛选情况
    const newItems = options?.filter((v) => {
      const label = v.searchStr || v.label!.toString();
      return label.toLowerCase().includes(value.toLowerCase().trim());
    });
    setItems(newItems || []);
  };

  const childList = Array.isArray(children) ? children : [children];
  const InputLabel = childList.find((v) => v.type === Label);
  const InputHint = childList.find((v) => v.type === Hint);
  const InputTrigger = childList.find((v) => v.type === Trigger);
  return (
    <DropdownContext.Provider value={{ multiple }}>
      <div className={cn(className, 'ru-dropdown', 'flex gap-1 flex-col')}>
        {InputLabel}
        <Popover.Root open={showPanel} onOpenChange={setShowPanel}>
          <Popover.Trigger disabled={disabled}>
            {cloneElement(InputTrigger!, {
              tabIndex: 0,
              disabled,
              onKeyDown: (e: KeyboardEvent) => handleKeyDown(e, 'trigger'),
              focused: showPanel,
              children: renderTrigger(),
            })}
          </Popover.Trigger>
          <Popover.Content
            className="w-full"
            placement="bottomLeft"
            animateParams={opacity_y}
          >
            <div
              style={{ maxHeight: listHeight || undefined }}
              className={cn(
                'flex flex-col gap-1 p-2',
                'rounded-16 bg-bg-white shadow-m',
                'user-select-none overflow-y-auto overflow-x-hidden',
                'border border-stroke-soft',
              )}
            >
              {showSearch && (
                <>
                  <Search
                    placeholder={searchPlaceholder}
                    loading={searchLoading}
                    onChange={handleSearch}
                    onKeyDown={(e: KeyboardEvent) => handleKeyDown(e, 'search')}
                  />
                  <Divider type="line-spacing" />
                </>
              )}
              {dropdownRender
                ? dropdownRender(renderChildren())
                : renderChildren()}
            </div>
          </Popover.Content>
        </Popover.Root>
        {InputHint}
      </div>
    </DropdownContext.Provider>
  );
}

// https://www.figma.com/design/y0JSnExMp40ARdB3ShxHz0/Admin-Portal-v4?node-id=777-92663&m=dev

// https://www.figma.com/design/y0JSnExMp40ARdB3ShxHz0/Admin-Portal-v4?node-id=777-59777&m=dev

// 分组 https://www.figma.com/design/y0JSnExMp40ARdB3ShxHz0/Admin-Portal-v4?node-id=777-59777&m=dev
