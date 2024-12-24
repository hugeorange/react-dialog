import { RiUserLine } from '@remixicon/react';
import { Hint, Input, Label } from '@rushable/align-ui';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React, { useState } from 'react';
import { TInputSize } from '../components/Input';

const sizes = ['m', 's', 'xs'] as const;
export default () => {
  const [filterBody, check, radio] = useDemoFilter({
    checkboxArr: ['disabled', 'error'],
    radioArr: [{ label: 'size', value: sizes }],
  });
  const [value1, setValue1] = useState('');
  return (
    <div className="flex flex-col gap-8">
      {filterBody()}

      <Input.Root
        disabled={check[0].disabled}
        error={check[1].error}
        size={radio[0].size as TInputSize}
        placeholder="Placeholder text..."
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        onEnter={(value) => console.log('onEnter', value)}
      >
        <Label
          required
          text="Label"
          subText="(Optional)"
          info={<div className="w-[100px]">This is a sub label.</div>}
        />
        <Input.Icon type="before" as={<RiUserLine />} />
        <Hint showIcon>This is a hint text to help user.</Hint>
      </Input.Root>

      <Input.Root
        disabled={check[0].disabled}
        error={check[1].error}
        size={radio[0].size as TInputSize}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      >
        <Label required text="Label" info />
        <Input.Icon type="before" as={<span>$</span>} />
        <Hint icon={<RiUserLine />}>This is a hint text to help user.</Hint>
      </Input.Root>

      <Input.Root
        disabled={check[0].disabled}
        error={check[1].error}
        size={radio[0].size as TInputSize}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      >
        <Label required text="Label" />
        <Input.Icon type="after" as={<span>%</span>} />
        <Hint>This is a hint text to help user.</Hint>
      </Input.Root>

      <Input.Root
        disabled={check[0].disabled}
        error={check[1].error}
        size={radio[0].size as TInputSize}
        placeholder="Placeholder text..."
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      >
        <Label required text="Label" />
        <Input.Addon type="before" as="https://" />
        <Input.Addon type="after" as=".com" />
        <Hint>This is a hint text to help user.</Hint>
      </Input.Root>

      <Input.Root
        disabled={check[0].disabled}
        error={check[1].error}
        size={radio[0].size as TInputSize}
        placeholder="Placeholder text..."
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      >
        <Label required text="Label" />
        <Input.Icon type="before" as={<RiUserLine />} />
        <Input.Addon type="after" as=".com" />
        <Hint>This is a hint text to help user.</Hint>
      </Input.Root>
    </div>
  );
};
