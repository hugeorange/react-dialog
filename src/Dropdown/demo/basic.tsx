import { RiEyeLine } from '@remixicon/react';
import { Badge, Button, Hint, Label } from '@rushable/align-ui';
import * as Dropdown from '@rushable/align-ui/Dropdown';
import { Trigger } from '@rushable/align-ui/Input';
import React, { useState } from 'react';
import cn from '../../utils/cn';

const options1 = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

const options2 = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5', disabled: true },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' },
  { label: 'Option 8', value: '8' },
];

const customLabel = (label: string, disabled?: boolean) => (
  <div className="flex items-center gap-3">
    <div className="flex-1 flex flex-col gap-1">
      <span
        className={cn(
          'label-s text-text-strong',
          disabled && '!text-text-disabled',
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'paragraph-xs text-text-sub',
          disabled && '!text-text-disabled',
        )}
      >
        Internal note
      </span>
    </div>

    {disabled ? (
      <Badge.Root style="lighter" disabled size="m" color="gray">
        Contain nested already
      </Badge.Root>
    ) : (
      <>
        <Badge.Root color="sky" size="m">
          Product
        </Badge.Root>
        <Button.Root
          type="neutral"
          style="stroke"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            alert('click');
          }}
        >
          <Button.Icon className="text-icon-sub" as={<RiEyeLine />} />
        </Button.Root>
      </>
    )}
  </div>
);

const options3 = [
  {
    label: customLabel('Modifier name'),
    searchStr: 'Modifier name',
    value: '1',
  },
  {
    label: customLabel('Modifier name2'),
    searchStr: 'Modifier name2',
    value: '2',
  },
  {
    label: customLabel('Modifier name3'),
    searchStr: 'Modifier name3',
    value: '3',
  },
  {
    label: customLabel('Modifier name4', true),
    searchStr: 'Modifier name4',
    value: '4',
    disabled: true,
  },
  {
    label: customLabel('Modifier name5'),
    searchStr: 'Modifier name5',
    value: '5',
  },
  {
    label: customLabel('Modifier name6'),
    searchString: 'Modifier name6',
    value: '6',
  },
];

export default () => {
  const [value1, setValue1] = useState('1');
  const [value2, setValue2] = useState<string[]>(['2', '3']);
  const [value3, setValue3] = useState<string[]>([]);
  const [value4, setValue4] = useState<string>('');

  return (
    <div className="flex flex-col justify-between bg-bg-white pb-48 gap-10 max-md:p-0 p-8">
      <Dropdown.Root
        // showSearch
        options={options1}
        value={value1}
        onChange={(value) => setValue1(value[0])}
      >
        <Label text="single dropdown" />
        <Trigger placeholder="Select categories" />
      </Dropdown.Root>

      <Dropdown.Root
        showSearch
        multiple
        options={options2}
        value={value2}
        onChange={setValue2}
      >
        <Label text="multiple dropdown" />
        <Trigger placeholder="Select categories" />
      </Dropdown.Root>

      <Dropdown.Root
        showSearch
        multiple
        options={options3}
        value={value3}
        onChange={setValue3}
      >
        <Label text="custom render multiple dropdown" />
        <Trigger placeholder="Select categories" />
      </Dropdown.Root>

      <Dropdown.Root
        listHeight={null}
        showSearch
        multiple
        options={options3}
        value={value3}
        onChange={setValue3}
        dropdownRender={(menu) => (
          <>
            {menu}
            <div className="px-2">
              <Button.Root
                className="my-2 w-full"
                type="neutral"
                style="stroke"
                onClick={() => alert('button')}
              >
                + Button
              </Button.Root>
              <div className="py-2 paragraph-s text-text-soft">
                v.1.5.69 · Terms & Conditions
              </div>
            </div>
          </>
        )}
      >
        <Label text="dropdown render multiple dropdown" />
        <Trigger placeholder="Select categories" />
      </Dropdown.Root>

      <Dropdown.Root
        listHeight={null}
        options={options2}
        value={value4}
        onChange={(value) => setValue4(value[0])}
        triggerRender={(opt) => {
          if (!opt?.length) return null;
          return (
            <div className="flex justify-between">
              <span>{opt[0].label}</span>
              <Badge.Root color="gray" size="m">
                8.250%
              </Badge.Root>
            </div>
          );
        }}
      >
        <Label text="custom trigger render" />
        <Trigger placeholder="Select categories" />
      </Dropdown.Root>

      <Dropdown.Root value={undefined} disabled onChange={() => null}>
        <Label text="disabled dropdown" />
        <Trigger placeholder="Select categories" />
      </Dropdown.Root>

      <Dropdown.Root
        value={undefined}
        onChange={() => null}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 5', value: '5', disabled: true },
        ]}
      >
        <Label required text="error dropdown" />
        <Trigger error={true} placeholder="Select categories" />
        <Hint showIcon error>
          Please select at least one category
        </Hint>
      </Dropdown.Root>
    </div>
  );
};
