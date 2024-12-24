import { RiCloseLine } from '@remixicon/react';
import React, { cloneElement, useContext } from 'react';
import * as Button from '../../Button';
import cn from '../../utils/cn';
import { ModalContext } from './Modal';

export type TModalHeaderProps = {
  size?: 'm' | 's';
  icon?: React.ReactElement;
  title: React.ReactNode;
  desc?: React.ReactNode;
  onClose?: () => void;
};
export default function ModalHeader({
  size = 'm',
  icon,
  title,
  desc,
  onClose,
}: TModalHeaderProps) {
  const ctx = useContext(ModalContext);

  const renderIcon = () => {
    if (!icon) return null;
    if (size === 's') return cloneElement(icon, { size: 24 });
    return (
      <div className="flex justify-center items-center w-10 h-10 rounded-full border border-stroke-soft">
        {cloneElement(icon, { size: 24 })}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'ru-modal-header',
        'flex py-4 pl-5 pr-4 bg-bg-white border-b border-stroke-soft',
        size === 'm' ? 'gap-3.5' : 'gap-3',
        { 'items-center': size === 's' },
      )}
    >
      {renderIcon()}
      <div className="flex-1 flex flex-col gap-1">
        <div className="label-s text-text-strong">{title}</div>
        {desc && size === 'm' && (
          <p className="paragraph-xs text-text-sub">{desc}</p>
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
