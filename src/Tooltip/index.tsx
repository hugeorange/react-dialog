import React, { ReactNode, useState } from 'react';
import * as Popover from '../Popover';
import { TPlacement } from '../Popover';
import TooltipContent, { TTooltip } from './components/Content';

export type TTooltipProps = {
  action?: 'hover' | 'click';
  children: ReactNode;
  placement?: TPlacement;
  alwaysOpen?: boolean;
  contentCls?: string; // Popover className
} & TTooltip;
export default function Tooltip({
  children,
  action = 'hover',
  placement = 'top',
  contentCls,
  alwaysOpen,
  ...args
}: TTooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root
      className={args.className}
      open={typeof alwaysOpen === 'boolean' ? alwaysOpen : open}
      action={action}
      onOpenChange={setOpen}
    >
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content
        className={contentCls}
        placement={placement}
        showArrow
        arrowSize={args.size === 'xxs' ? 's' : 'm'}
        arrowCls={args.mode === 'dark' ? 'text-text-strong' : 'text-text-white'}
        arrowBorderColor={args.mode === 'dark' ? '' : undefined}
      >
        <TooltipContent
          size={args.size}
          mode={args.mode}
          content={args.content}
        />
      </Popover.Content>
    </Popover.Root>
  );
}
