import { RiAddLine } from '@remixicon/react';
import { Button, Divider } from '@rushable/align-ui';
import React from 'react';

export default () => {
  return (
    <div className="flex flex-col gap-16 mx-6">
      <Divider type="line"></Divider>
      <Divider type="line-spacing"></Divider>
      <Divider type="line-text">OR</Divider>
      <Divider type="text">OR</Divider>
      <Divider type="solid-text">Amount & Account</Divider>
      <h3>以下均为 type=line-text 情况</h3>
      <Divider>
        <Button.Root style="stroke" type="neutral">
          <Button.Icon as={<RiAddLine />} />
        </Button.Root>
      </Divider>
      <Divider>
        <Button.Root style="stroke" type="neutral">
          ADD
        </Button.Root>
      </Divider>
    </div>
  );
};
