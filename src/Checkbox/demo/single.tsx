import { Checkbox } from '@rushable/align-ui';
import React, { useState } from 'react';

export default function Basic() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <Checkbox.Root
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <Checkbox.Root
        indeterminate
        onChange={(e) => console.log(e.target.value, e.target.checked)}
      />
      <Checkbox.Root disabled />
      <Checkbox.Root disabled checked />
      <hr />
      <Checkbox.Root
        checked={checked}
        toggle
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Checkbox.Root
        checked={checked}
        toggle
        loading
        onChange={(e) => setChecked(e.target.checked)}
      >
        Loading
      </Checkbox.Root>
      <Checkbox.Root disabled toggle />
      <Checkbox.Root disabled toggle checked />
    </div>
  );
}
