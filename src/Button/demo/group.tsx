import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from '@remixicon/react';
import { Button } from '@rushable/align-ui';
import { Group, GroupButton } from '@rushable/align-ui/Button';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React, { useState } from 'react';
import { TGroupButtonSize } from '../components/Group';

const sizes = ['s', 'xs', '2xs'] as const;

export default function ButtonDemo() {
  const [filterBody, check, radio] = useDemoFilter({
    checkboxArr: ['disabled'],
    radioArr: [{ label: 'size', value: sizes }],
  });
  const [value, setValue] = useState('1');

  return (
    <div className="flex flex-col gap-6">
      {filterBody()}
      <Group
        className="flex mr-8 flex-wrap"
        disabled={check[0].disabled}
        size={radio[0].size as TGroupButtonSize}
        value={value}
        onChange={(e) => {
          console.log(e);
          setValue(e);
        }}
      >
        <GroupButton value={'1'}>Button Radio</GroupButton>
        <GroupButton value={'3'}>
          <Button.Icon as={<RiArrowLeftSLine />} />
          Button Radio
        </GroupButton>
        <GroupButton value={'4'}>
          Button Radio
          <Button.Icon as={<RiArrowRightSLine />} />
        </GroupButton>
        <GroupButton value={'5'}>
          <Button.Icon as={<RiArrowLeftSLine />} />
          Button Radio
          <Button.Icon as={<RiArrowRightSLine />} />
        </GroupButton>
      </Group>

      <div className="flex flex-wrap gap-4">
        <GroupButton
          disabled={check[0].disabled}
          size={radio[0].size as TGroupButtonSize}
          onClick={() => alert('click no group')}
        >
          <Button.Icon as={<RiArrowDownSLine />} />
        </GroupButton>
        <GroupButton
          disabled={check[0].disabled}
          size={radio[0].size as TGroupButtonSize}
          onClick={() => alert('click no group')}
        >
          Button Radio
        </GroupButton>
        <GroupButton
          disabled={check[0].disabled}
          size={radio[0].size as TGroupButtonSize}
        >
          Button Radio
        </GroupButton>
      </div>
    </div>
  );
}
