import { Button, Modal } from '@rushable/align-ui';
import React from 'react';

export default function Basic() {
  const handleClick = (type: any) => {
    const m = Modal.confirm({
      type: type,
      align: type === 'error' ? 'h' : 'v',
      title: 'Insert Status Modal Title After 5s will close',
      desc: 'Insert your status modal description here. It would look better as two lines of text.',
      okBtnProps: { children: 'Apply Changes' },
      cancelBtnProps: { children: 'Cancel' },
      btnStretch: true,
      onOk: () => {
        m.destroy();
      },
    });
  };
  return (
    <>
      <h5>基于 Modal.open 实现</h5>
      <div className="flex flex-wrap gap-4">
        <Button.Root onClick={() => handleClick('error')}>
          Open static error
        </Button.Root>
        <Button.Root onClick={() => handleClick('warning')}>
          Open static warning
        </Button.Root>
        <Button.Root onClick={() => handleClick('success')}>
          Open static success
        </Button.Root>
        <Button.Root onClick={() => handleClick('info')}>
          Open static info
        </Button.Root>
      </div>
    </>
  );
}
