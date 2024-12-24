import { RiCloseLine, RiGlobalLine } from '@remixicon/react';
import { Button, Divider, Popover, Tooltip } from '@rushable/align-ui';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React, { useState } from 'react';
import cn from '../../utils/cn';

type TTrigger = 'click' | 'hover';
const content = <div className="w-[90px] text-center">Insert Tooltip</div>;
export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterBody, _, radio] = useDemoFilter({
    checkboxArr: [],
    radioArr: [{ label: 'trigger', value: ['click', 'hover'] }],
  });

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const renderContent = (mode: 'light' | 'dark') => {
    const iconColor = mode === 'light' ? 'text-icon-sub' : 'text-icon-soft';
    const titleColor =
      mode === 'light' ? 'text-text-strong' : 'text-text-white';
    const descColor = mode === 'light' ? 'text-text-sub' : 'text-text-soft';
    const bgColor = mode === 'light' ? 'bg-bg-white' : 'bg-bg-strong';
    const close = mode === 'light' ? setShow : setShow2;
    return (
      <div
        className={cn(
          ' w-[320px] rounded-16 border border-stroke-soft shadow-md',
          bgColor,
        )}
      >
        <div className="p-5">
          <div className="flex">
            <RiGlobalLine className={iconColor} />
            <div className={cn('label-m flex-1 ml-3', titleColor)}>
              Insert Tooltip
            </div>
            <RiCloseLine
              className={cn(iconColor, 'cursor-pointer')}
              onClick={() => close(false)}
            />
          </div>
          <div className={cn('ml-8 mt-1 paragraph-s text-text-sub', descColor)}>
            Insert tooltip description here. It would look much better as three
            lines of text.
          </div>
        </div>
      </div>
    );
  };

  const trigger = radio[0].trigger as TTrigger;
  return (
    <div className="flex flex-col gap-6">
      {filterBody()}
      <div className="flex flex-wrap gap-4">
        <Tooltip action={trigger} content={content} size="xxs" mode="light">
          <Button.Root style="stroke">Insert Tooltip -s</Button.Root>
        </Tooltip>
        <Tooltip action={trigger} content={content} size="xxs" mode="dark">
          <Button.Root style="stroke">Insert Tooltip - s</Button.Root>
        </Tooltip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Tooltip action={trigger} content={content} size="xs" mode="light">
          <Button.Root style="stroke">Insert Tooltip - m</Button.Root>
        </Tooltip>
        <Tooltip action={trigger} content={content} size="xs" mode="dark">
          <Button.Root style="stroke">Insert Tooltip - m</Button.Root>
        </Tooltip>
      </div>

      <Divider className="my-4">controlled</Divider>

      <div className="flex flex-wrap gap-4">
        <Popover.Root open={show} action={trigger} onOpenChange={setShow}>
          <Popover.Trigger>
            <Button.Root style="stroke">Popover Light</Button.Root>
          </Popover.Trigger>

          <Popover.Content
            // 通过 margin 负值解决箭头旁边边框不连续的问题
            placement="top"
            arrowCls="text-text-white"
            arrowSize="m"
            showArrow
          >
            {renderContent('light')}
          </Popover.Content>
        </Popover.Root>

        <Popover.Root open={show2} action={trigger} onOpenChange={setShow2}>
          <Popover.Trigger>
            <Button.Root style="stroke">Popover Dark</Button.Root>
          </Popover.Trigger>

          <Popover.Content
            // 通过 margin 负值解决箭头旁边边框不连续的问题
            placement="top"
            arrowCls="text-text-strong"
            arrowBorderColor=""
            arrowSize="m"
            showArrow
          >
            {renderContent('dark')}
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
};
