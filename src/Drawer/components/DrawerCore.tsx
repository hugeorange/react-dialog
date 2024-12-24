import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cn from '../../utils/cn';

export type TDrawerCoreProp = {
  open: boolean;
  maskClosable?: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[];
};

export default function DrawerCore({
  open,
  maskClosable = true,
  onClose,
  children,
}: TDrawerCoreProp) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          className={cn(
            'ru-drawer-core',
            '[perspective:800px] [transform-style:preserve-3d]',
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="bg-mask"
            onClick={maskClosable ? onClose : () => {}}
          />
          <div className="absolute right-0">
            <motion.div
              initial={{ x: '100%', opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'tween',
                stiffness: 260,
                damping: 15,
                duration: 0.3,
                ease: 'easeIn',
              }}
            >
              <div className="h-screen bg-bg-white">{children}</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
