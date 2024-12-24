import { RiHome5Fill, RiSettings2Line } from '@remixicon/react';
import { Button, Modal } from '@rushable/align-ui';
import React, { useState } from 'react';

export default function Basic() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button.Root onClick={() => setIsOpen(true)}>
          Open Medium Modal
        </Button.Root>
        <Button.Root onClick={() => setIsOpen2(true)}>
          Open Small Modal
        </Button.Root>
      </div>
      <Modal.Root open={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header
          title="Deactivate account"
          desc="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
          icon={<RiSettings2Line />}
          onClose={() => setIsOpen(false)}
        />
        <Modal.Content>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>
          <div className="flex gap-4">
            <button type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button type="button" onClick={() => setIsOpen(false)}>
              Deactivate
            </button>
          </div>
        </Modal.Content>
        <Modal.Footer
          leftEl={<Button.Link>Link Button.Root</Button.Link>}
          okBtnProps={{ children: [<RiHome5Fill key={1} />, 'Apply Changes'] }}
          cancelBtnProps={{ children: 'Cancel' }}
          onOk={() => alert('ok')}
        />
      </Modal.Root>
      <Modal.Root
        maskClosable={false}
        open={isOpen2}
        onClose={() => setIsOpen2(false)}
      >
        <Modal.Header
          title="Deactivate account"
          icon={<RiSettings2Line />}
          onClose={() => setIsOpen2(false)}
        />
        <Modal.Content>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>
          <div className="flex gap-4">
            <button type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button type="button" onClick={() => setIsOpen(false)}>
              Deactivate
            </button>
          </div>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
