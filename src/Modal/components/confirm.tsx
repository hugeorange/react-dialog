import React, { useEffect, useState } from 'react';
import cn from '../../utils/cn';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalFooter, { TModalFooterProps } from './ModalFooter';
import IconTips from './iconTips';
import open from './open';

// Modal.confirm({ ... }) 的参数
type TConfirmParams = {
  type: 'error' | 'warning' | 'success' | 'info';
  align?: 'h' | 'v'; // 对齐方式
  title: React.ReactNode;
  desc?: React.ReactNode;
} & TModalFooterProps;

// ConfirmModalWrapper 所需要 Props
type TConfirmModal = {
  show?: boolean;
  onClose?: () => void;
} & TConfirmParams;

export const ConfirmModalWrapper = ({
  type = 'info',
  align = 'h',
  title,
  desc,
  show = true,
  onClose,
  ...props
}: TConfirmModal) => {
  const [insideOpen, setInsideOpen] = useState(show);

  useEffect(() => {
    if (!insideOpen) {
      onClose?.();
    }
  }, [insideOpen]);

  useEffect(() => {
    if (!show) {
      setInsideOpen(false);
    }
  }, [show]);

  const handleClose = () => setInsideOpen(false);
  return (
    <Modal
      open={insideOpen}
      {...props}
      maskClosable={false}
      onClose={handleClose}
    >
      <ModalContent>
        <div
          className={cn('flex gap-4', {
            'flex-col items-center text-center': align === 'v',
          })}
        >
          {IconTips(type)}
          <div className="flex-1 flex flex-col gap-1">
            <div className="label-m text-text-strong">{title}</div>
            {desc && <p className="paragraph-s text-text-sub">{desc}</p>}
          </div>
        </div>
      </ModalContent>
      <ModalFooter
        {...props}
        onOk={props.onOk || handleClose}
        onCancel={props.onCancel || handleClose}
      />
    </Modal>
  );
};

export default function confirm(props: TConfirmParams) {
  return open((show, onClose) => (
    <ConfirmModalWrapper show={show} onClose={onClose} {...props} />
  ));
}
