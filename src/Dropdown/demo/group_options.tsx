import { Dropdown, Label } from '@rushable/align-ui';

import { Trigger } from '@rushable/align-ui/Input';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<string[]>([]);

  const options = [
    {
      groupLabel: 'All Day Menu',
      options: [
        { label: 'Hot Appetizers', value: '1' },
        { label: 'Chef Recommendations', value: '2' },
        { label: 'Main Entrees', value: '3' },
        { label: 'Soup', value: '4' },
        { label: 'Salad', value: '5' },
      ],
    },
    {
      groupLabel: 'Lunch Menu',
      options: [
        { label: 'Special Combo', value: '6' },
        { label: 'Bent Box', value: '7' },
        { label: 'Main Entrees', value: '8' },
      ],
    },
  ];
  return (
    <Dropdown.GroupOption
      multiple
      listHeight={null}
      options={options}
      value={value}
      onChange={setValue}
    >
      <Label text="group label" />
      <Trigger placeholder="Select categories" />
    </Dropdown.GroupOption>
  );
};
