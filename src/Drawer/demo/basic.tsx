import { RiHome5Fill, RiSettings2Line } from '@remixicon/react';
import { Button, Drawer } from '@rushable/align-ui';
import React, { useState } from 'react';

export default function Basic() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button.Root onClick={() => setIsOpen(true)}>
          Open Medium Drawer
        </Button.Root>
        <Button.Root onClick={() => setIsOpen2(true)}>
          Open Small Drawer
        </Button.Root>
      </div>
      <Drawer.Root open={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header
          title="Deactivate account"
          desc="Please insert drawer description here."
          size="l"
          icon={<RiSettings2Line />}
          divider
        />
        <Drawer.Content>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>
          <Button.Root onClick={() => setIsOpen2(true)}>
            Open Small Drawer
          </Button.Root>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Drawer.Content>
        <Drawer.Footer
          // btnStretch
          leftEl={<Button.Link>Link Button</Button.Link>}
          okBtnProps={{ children: [<RiHome5Fill key={1} />, 'Apply Changes'] }}
          cancelBtnProps={{ children: 'Cancel' }}
          onOk={() => alert('ok')}
        />
      </Drawer.Root>
      <Drawer.Root
        open={isOpen2}
        // footer={null}
        onClose={() => setIsOpen2(false)}
      >
        <Drawer.Header
          title="Deactivate account"
          desc="Please insert drawer description here."
          size="l"
          icon={<RiSettings2Line />}
          divider
        />
        <Drawer.Content>
          <div className="p-5">
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsOpen2(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
