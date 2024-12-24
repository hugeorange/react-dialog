import { RiCloseLine, RiUser6Line } from '@remixicon/react';
import { Button, Popover } from '@rushable/align-ui';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const renderView = () => {
    return (
      <div className=" w-[320px] h-[240px] rounded-16 border border-stroke-soft bg-white shadow-md">
        <div className="p-5  border-b border-stroke-soft">
          <div className="flex justify-between">
            <div className="w-12 h-12 flex justify-center items-center rounded-full border border-stroke-soft">
              <RiUser6Line className="text-icon-sub" />
            </div>
            <RiCloseLine
              className="text-icon-sub cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="mt-4 label-m">Insert Popover</div>
          <div className="mt-1 paragraph-s text-text-sub">
            Insert popover description here. It would look much better as three
            lines of text.
          </div>
        </div>
        <div className="px-5 py-4 flex justify-between items-center">
          <div className="paragraph-s text-text-sub">Step 1 of 4</div>
          <div className="flex gap-3">
            <Button.Root
              className="w-20"
              type="neutral"
              style="stroke"
              onClick={() => setOpen(false)}
            >
              Back
            </Button.Root>
            <Button.Root className="w-20" type="primary" style="filled">
              Next
            </Button.Root>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mb-2">
        Controlled: 可以在外部控制打开关闭, 适用于高度定制内容
      </div>
      <div className="inline-flex  gap-4">
        {/* 受控模式 */}
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger>
            <Button.Root style="stroke">Controlled mode</Button.Root>
          </Popover.Trigger>
          <Popover.Content
            placement="bottomLeft"
            arrowCls="text-text-white"
            showArrow
          >
            {renderView()}
          </Popover.Content>
        </Popover.Root>
        {/* 非受控模式 */}
        <Popover.Root>
          <Popover.Trigger>
            <Button.Root style="stroke">UnControlled mode</Button.Root>
          </Popover.Trigger>
          <Popover.Content
            allowClose={true}
            placement="bottomLeft"
            arrowCls="text-text-white"
            showArrow
          >
            {renderView()}
          </Popover.Content>
        </Popover.Root>
      </div>
    </>
  );
};
