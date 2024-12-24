import { RiSunLine } from '@remixicon/react';
import { Tabs } from '@rushable/align-ui';
import React, { useState } from 'react';
import { TTabsItems } from '..';

type TValue = '1' | '2' | '3' | '4' | '5' | '6';
export default function Basic() {
  const [value, setValue] = useState<TValue>('1');

  const items: TTabsItems<TValue>[] = [
    { title: 'Overview', value: '1' },
    {
      title: 'Overview',
      value: '2',
      leftIcon: <RiSunLine />,
      rightIcon: <RiSunLine />,
    },
    { title: 'Overview', value: '3' },
    // 特殊处理针对中间会出现细线的情况
    Tabs.MENU_DIVIDE_LINE,
    { title: 'Overview', value: '5' },
    { leftIcon: <RiSunLine />, value: '6' },
  ];
  return (
    <div className="py-8 overflow-x-auto">
      <Tabs.HMenu<TValue>
        value={value}
        items={items}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
}
