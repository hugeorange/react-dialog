import { Hint, Input, Label } from '@rushable/align-ui';
import React, { useState } from 'react';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
      <Input.Textarea
        placeholder="Placeholder text..."
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        maxLength={300}
      >
        <Label text="Change Label" />
        <Hint showIcon>This is a hint text to help user.</Hint>
      </Input.Textarea>

      <Input.Textarea
        value="123..."
        disabled
        maxLength={300}
        placeholder="Placeholder text..."
      >
        <Label text="Change Label" />
        <Hint showIcon>This is a hint text to help user.</Hint>
      </Input.Textarea>
      <Input.Textarea
        value={value2}
        maxLength={300}
        onChange={(e) => setValue2(e.target.value)}
        placeholder="Placeholder text..."
      />
    </div>
  );
};
