import Card from './components/Card';
import HMenu, { MENU_DIVIDE_LINE } from './components/HMenu';
import VMenu from './components/VMenu';

export { Card, HMenu, MENU_DIVIDE_LINE, VMenu };

// 选项数据
export type TTabsItems<T = string> = {
  title?: React.ReactNode;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  value: T;
  disabled?: boolean;
};
export type TTabsProps<T = string> = {
  className?: string;
  showTopLine?: boolean; // HMenu 情况下是否显示顶部线条
  value: T; // 当前激活选项
  items: TTabsItems<T>[];
  onChange: (value: T) => void;
};
