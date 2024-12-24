import React, { useContext } from 'react';
import * as Button from '../../Button';
import { TButtonProps } from '../../Button/components/Button';
import cn from '../../utils/cn';
import { ModalContext } from './Modal';

export type TModalFooterProps = {
  children?: React.ReactElement;
  okBtnProps?: TButtonProps;
  cancelBtnProps?: TButtonProps;
  onOk?: () => void;
  onCancel?: () => void;
  leftEl?: React.ReactNode;
  btnStretch?: boolean; // ok cancel 是否铺满底部
};
export default function ModalFooter({
  children,
  leftEl,
  btnStretch,
  okBtnProps,
  cancelBtnProps,
  onOk,
  onCancel,
}: TModalFooterProps) {
  const ctx = useContext(ModalContext);

  return (
    <div
      className={cn(
        'ru-modal-footer',
        'flex items-center justify-end gap-4 py-4 px-5 bg-bg-white border-t border-stroke-soft',
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
