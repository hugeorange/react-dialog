import { RiSunLine } from '@remixicon/react';
import { Tabs } from '@rushable/align-ui';
import React, { useState } from 'react';

type TValue = 'label1' | 'label2' | 'label3' | 'label4';
export default function Basic() {
  const [value, setValue] = useState<TValue>('label1');

  // const items: TTabsItems<TValue>[] = [
  //   { title: 'Label1', value: 'label1' },
  //   { title: 'Label2', value: 'label2', leftIcon: <RiSunLine /> },
  //   { title: 'disabled', value: 'label3', disabled: true },
  //   { leftIcon: <RiSunLine />, value: 'label4' },
  // ];
  return (
    <Tabs.Card<TValue>
      value={value}
      items={[
        { title: 'Label1', value: 'label1' },
        { title: 'Label2', value: 'label2', leftIcon: <RiSunLine /> },
        { title: 'disabled', value: 'label3', disabled: true },
        { leftIcon: <RiSunLine />, value: 'label4' },
      ]}
      onChange={(value) => setValue(value)}
    />
  );
}
