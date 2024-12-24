import React from 'react';
import cn from '../../utils/cn';
import DrawerCore, { TDrawerCoreProp } from './DrawerCore';

export const DrawerContext = React.createContext<{ onClose: () => void }>(
  null as any,
);

type TDrawerProps = TDrawerCoreProp & {
  className?: string;
};
export default function Drawer({
  className,
  open,
  maskClosable = true,
  onClose,
  children,
}: TDrawerProps) {
  return (
    <DrawerContext.Provider value={{ onClose }}>
      <DrawerCore maskClosable={maskClosable} open={open} onClose={onClose}>
        <div
          className={cn(
            'h-screen w-full flex flex-col',
            className || 'sm:w-[520px]',
          )}
        >
          {children}
        </div>
      </DrawerCore>
    </DrawerContext.Provider>
  );
}
