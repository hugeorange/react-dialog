import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Loading from '../../Loading';

export default function Spin({ show = false }: { show?: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute z-50 inset-0 flex items-center justify-center bg-neutral-alpha-24"
        >
          <Loading className="text-primary-base" size={36} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
