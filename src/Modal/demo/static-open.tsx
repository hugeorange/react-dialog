import { Button, Modal } from '@rushable/align-ui';
import React from 'react';

export default function Basic() {
  const handleClick = () => {
    const m = Modal.open((open, onClose) => (
      <Modal.OpenContent open={open} onClose={onClose}>
        <Modal.Content>
          <div className="flex flex-col">
            <h1>open custom static modal</h1>
            <div className="flex flex-wrap gap-4">
              <Button.Root onClick={() => m.destroy()}>Close</Button.Root>
            </div>
          </div>
        </Modal.Content>
      </Modal.OpenContent>
    ));
  };
  return (
    <div className="flex flex-wrap gap-4">
      <Button.Root onClick={() => handleClick()}>
        open static content
      </Button.Root>
    </div>
  );
}
