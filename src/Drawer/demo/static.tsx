import { RiSettings2Line } from '@remixicon/react';
import { Button, Drawer } from '@rushable/align-ui';
import React from 'react';

export default function Basic() {
  const handleClick = () => {
    const d = Drawer.open((open, onClose) => (
      <Drawer.OpenContent open={open} onClose={onClose}>
        <Drawer.Header
          title="Deactivate account"
          desc="Please insert drawer description here."
          size="l"
          icon={<RiSettings2Line />}
          divider
        />

        <Drawer.Content>
          <div className="flex flex-col">
            <h1>open custom drawer modal</h1>
            <div className="flex flex-wrap gap-4">
              <Button.Root onClick={() => d.destroy()}>Close</Button.Root>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.OpenContent>
    ));
  };
  return (
    <div className="flex flex-wrap gap-4">
      <Button.Root onClick={() => handleClick()}>
        open static drawer content
      </Button.Root>
    </div>
  );
}
