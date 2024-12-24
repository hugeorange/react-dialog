import React from 'react';
import cn from '../../utils/cn';

export default function ModalContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex-1 overflow-y-auto', className)}>{children}</div>
  );
}
