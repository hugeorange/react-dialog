import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cn from '../../utils/cn';

export type TModalCoreProp = {
  className?: string;
  open: boolean;
  maskClosable?: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[];
};

export default function ModalCore({
  open,
  maskClosable = true,
  onClose,
  children,
}: TModalCoreProp) {
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
            'ru-modal-core',
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: 'tween',
              stiffness: 260,
              damping: 15,
              duration: 0.3,
              ease: 'easeIn',
            }}
          >
            <div className="h-fit mt-20 fixed inset-0 flex w-screen justify-center p-4">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
