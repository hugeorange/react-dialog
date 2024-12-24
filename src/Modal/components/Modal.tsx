import React from 'react';
import cn from '../../utils/cn';
import ModalCore, { TModalCoreProp } from './ModalCore';

// TODO 考虑可否解决 Modal 和 Drawer 组件，打开关闭时，页面抖动的问题
export const ModalContext = React.createContext<{ onClose: () => void }>(
  null as any,
);

export default function Modal({
  open,
  maskClosable = true,
  className,
  onClose,
  children,
}: TModalCoreProp) {
  return (
    <ModalContext.Provider value={{ onClose }}>
      <ModalCore maskClosable={maskClosable} open={open} onClose={onClose}>
        <div
          className={cn(
            'w-full rounded-20 bg-bg-white border border-stroke-soft shadow-m ',
            className || 'sm:w-[440px]',
          )}
        >
          {children}
        </div>
      </ModalCore>
    </ModalContext.Provider>
  );
}
