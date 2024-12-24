import { RiArrowRightSLine, RiGridLine } from '@remixicon/react';
import { Tabs } from '@rushable/align-ui';
import React, { useState } from 'react';
import { TTabsItems } from '..';

// type TValue = '1' | '2' | '3' | '4';
export default function Basic() {
  const [value, setValue] = useState('1');

  const items: TTabsItems[] = [
    { title: 'Overview.0000000', value: '1' },
    {
      title: 'Overview11111',
      value: '2',
      leftIcon: <RiGridLine />,
      rightIcon: (
        <div className="p-px bg-white rounded-full">
          <RiArrowRightSLine />
        </div>
      ),
    },
    { title: 'Overview33333', value: '3', disabled: true },
    { leftIcon: <RiGridLine />, value: '4' },
  ];
  return (
    <div className="flex flex-col gap-16">
      <Tabs.VMenu
        label="Select Menu"
        className="w-[258px]"
        value={value}
        items={items}
        onChange={(value) => setValue(value)}
      />
      <Tabs.VMenu
        className="w-[258px]"
        style="list"
        value={value}
        items={items}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
}
