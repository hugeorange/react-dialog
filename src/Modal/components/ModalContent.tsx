import React from 'react';
import cn from '../../utils/cn';

export default function ModalContent({
  className,
  scroll = true,
  children,
}: {
  className?: string;
  scroll?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'p-5 max-h-[calc(100vh-320px)]',
        { 'overflow-y-auto': scroll },
        className,
      )}
    >
      {children}
    </div>
  );
}
