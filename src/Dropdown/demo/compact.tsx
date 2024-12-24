import { Dropdown } from '@rushable/align-ui';
import React, { useState } from 'react';

const options = [
  { label: '20', value: '1' },
  { label: '50', value: '2' },
  { label: '100', value: '3' },
  { label: '200', value: '4' },
];

export default () => {
  const [value, setValue] = useState('1');
  return (
    <div>
      <div className="flex gap-10">
        <Dropdown.Compact
          className="inline-flex"
          size="m"
          value={value}
          options={options}
          onChange={(e) => setValue(e[0])}
        />
        <Dropdown.Compact
          className="inline-flex"
          size="s"
          value={value}
          options={options}
          onChange={(e) => setValue(e[0])}
        />
        <Dropdown.Compact
          className="inline-flex"
          size="xs"
          value={value}
          options={options}
          onChange={(e) => setValue(e[0])}
        />
      </div>
      <hr className="my-4" />
      <Dropdown.Compact
        className="inline-flex"
        size="xs"
        panelCls="!w-14"
        inline
        value={value}
        options={options}
        onChange={(e) => setValue(e[0])}
      />
    </div>
  );
};
