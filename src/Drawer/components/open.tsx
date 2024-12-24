import React, { useEffect, useState } from 'react';
import open from '../../Modal/components/open';
import Drawer from './Drawer';
import { TDrawerCoreProp } from './DrawerCore';

// 自定义 open 内容的容器
export function OpenContent({
  open = true,
  onClose,
  children,
  maskClosable,
}: TDrawerCoreProp) {
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
    <Drawer open={insideOpen} maskClosable={maskClosable} onClose={handleClose}>
      {children}
    </Drawer>
  );
}

export default open;
