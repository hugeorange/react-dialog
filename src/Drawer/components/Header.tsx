import { RiCloseLine } from '@remixicon/react';
import React, { cloneElement, useContext } from 'react';
import * as Button from '../../Button';
import cn from '../../utils/cn';
import { DrawerContext } from './Drawer';

export type TDrawerHeaderProps = {
  size?: 'l' | 's';
  divider?: boolean;
  icon?: React.ReactElement;
  title: React.ReactNode;
  desc?: React.ReactNode;
  onClose?: () => void;
};
export default function DrawerHeader({
  size = 's',
  divider = true,
  icon,
  title,
  desc,
  onClose,
}: TDrawerHeaderProps) {
  const ctx = useContext(DrawerContext);

  const renderIcon = () => {
    if (!icon) return null;
    if (size === 's') return cloneElement(icon, { size: 24 });
    return (
      <div className="flex justify-center items-center w-12 h-12 rounded-full border border-stroke-soft">
        {cloneElement(icon, { size: 24 })}
      </div>
    );
  };
  return (
    <div
      className={cn(
        'ru-drawer-header',
        'flex p-5 bg-bg-white',
        size === 'l' ? 'gap-4' : 'gap-3',
        { 'border-b border-stroke-soft': divider },
        { 'items-center': size === 's' },
      )}
    >
      {renderIcon()}
      <div className="flex-1 flex flex-col gap-1">
        <div className="label-l text-text-strong">{title}</div>
        {desc && size === 'l' && (
          <p className="paragraph-s text-text-sub">{desc}</p>
        )}
      </div>
      <Button.Compact
        size="l"
        style="ghost"
        onClick={onClose || ctx.onClose}
        icon={<RiCloseLine size={24} />}
      />
    </div>
  );
}
