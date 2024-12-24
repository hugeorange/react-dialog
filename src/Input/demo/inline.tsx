import { RiUserLine } from '@remixicon/react';
import { Hint, Input, Label } from '@rushable/align-ui';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');
  const [edit1, setEdit1] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Input.Inline
        placeholder="placeholder text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isEdit={edit1}
        onEdit={(b) => {
          setEdit1(b);
          if (!b) {
            setValue('');
          }
        }}
        onDone={() => {
          console.log('onDone');
          setEdit1(false);
        }}
      >
        <Label required text="Label" />
        <Hint showIcon>This is a hint text to help user.</Hint>
        <Input.Icon type="before" as={<RiUserLine />} />
      </Input.Inline>

      <Input.Inline
        disabled
        placeholder="placeholder text"
        isEdit={edit2}
        onEdit={(b) => setEdit2(b)}
        onDone={() => {
          console.log('onDone');
          setEdit2(false);
        }}
      >
        <Input.Icon type="before" as={<RiUserLine />} />
      </Input.Inline>

      <Input.Inline
        error
        placeholder="placeholder text"
        isEdit={edit3}
        onEdit={(b) => setEdit3(b)}
        onDone={() => {
          console.log('onDone');
          setEdit3(false);
        }}
      >
        <Input.Icon type="before" as={<RiUserLine />} />
      </Input.Inline>
    </div>
  );
};
