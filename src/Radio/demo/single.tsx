import { Radio } from '@rushable/align-ui';
import React, { useState } from 'react';

export default function Basic() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <Radio.Root
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        Single Radio
      </Radio.Root>

      <Radio.Root disabled>Single Radio</Radio.Root>

      <Radio.Root disabled checked>
        Single Radio
      </Radio.Root>
    </div>
  );
}
