import { Button, Drawer, Modal, Popover } from '@rushable/align-ui';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const renderView = () => {
    return (
      <div className=" w-[320px] h-[240px] rounded-16 border border-stroke-soft bg-white shadow-md">
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
      <div className="mb-2">drawer popup</div>
      <div className="inline-flex  gap-4">
        <Button.Root onClick={() => setOpenDrawer(true)}>
          open drawer
        </Button.Root>

        <Drawer.Root open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Drawer.Header title="drawer popup" />
          <Drawer.Content className="flex flex-col justify-center items-center">
            <div
              className=""
              onClick={() => {
                setOpenModal(true);
              }}
            >
              test click
            </div>
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
          </Drawer.Content>
        </Drawer.Root>
      </div>
      <Modal.Root open={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Content className="h-[800px]">
          <Popover.Root open={open2} onOpenChange={setOpen2}>
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
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
