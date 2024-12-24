import React, { useContext } from 'react';
import * as Button from '../../Button';
import { TButtonProps } from '../../Button';
import cn from '../../utils/cn';
import { DrawerContext } from './Drawer';

export type TDrawerFooterProps = {
  children?: React.ReactElement;
  okBtnProps?: TButtonProps;
  cancelBtnProps?: TButtonProps;
  onOk?: () => void;
  onCancel?: () => void;
  leftEl?: React.ReactNode;
  btnStretch?: boolean; // ok cancel 是否铺满底部
};
export default function DrawerFooter({
  children,
  leftEl,
  btnStretch,
  okBtnProps,
  cancelBtnProps,
  onOk,
  onCancel,
}: TDrawerFooterProps) {
  const ctx = useContext(DrawerContext);

  return (
    <div
      className={cn(
        'ru-drawer-footer',
        'flex items-center justify-end gap-4 p-5 bg-bg-white border-t border-stroke-soft',
      )}
    >
      {children ? (
        children
      ) : (
        <>
          {leftEl && <div className="flex-1">{leftEl}</div>}
          <div className={cn('flex gap-3', { 'btn-stretch': btnStretch })}>
            {cancelBtnProps && (
              <Button.Root
                onClick={onCancel || ctx?.onClose}
                type="neutral"
                style="stroke"
                {...cancelBtnProps}
              />
            )}

            {okBtnProps && <Button.Root onClick={onOk} {...okBtnProps} />}
          </div>
        </>
      )}
    </div>
  );
}
