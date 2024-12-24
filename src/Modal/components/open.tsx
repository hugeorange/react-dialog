import React, { ReactElement, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from './Modal';
import { TModalCoreProp } from './ModalCore';

export default function open(
  component: (show: boolean, onClose: () => void) => ReactElement,
) {
  const domNode = document.createElement('div');
  domNode.classList.add('static-dialog-container');
  document.body.appendChild(domNode);
  const root = createRoot(domNode);

  const close = () => {
    setTimeout(() => {
      root.unmount();
      domNode.remove();
    }, 300);
  };

  const render = (show = true) => root.render(component(show, close));

  render();
  return { destroy: () => render(false) };
}

// 自定义 open 内容的容器
export function OpenContent({
  open = true,
  onClose,
  children,
  maskClosable = false,
}: TModalCoreProp) {
  const [insideOpen, setInsideOpen] = useState(false);
  // 避免不出现动画
  useEffect(() => {
    setInsideOpen(true);
  }, []);

  // 外界传递进来控制显示隐藏的元素
  useEffect(() => {
    if (!open) {
      handleClose();
    }
  }, [open]);

  const handleClose = () => {
    setInsideOpen(false);
    onClose?.();
  };

  return (
    <Modal open={insideOpen} maskClosable={maskClosable} onClose={handleClose}>
      {children}
    </Modal>
  );
}
