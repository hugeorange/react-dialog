import { Input } from '@rushable/align-ui';
import React, { useState } from 'react';

export default () => {
  const [submitValue, setSubmitValue] = useState('');
  const [value, setValue] = useState('15:32:00');
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <Input.Time onChange={(e) => setSubmitValue(e)} />
        <div>uncontrolled submitValue: {submitValue}</div>
      </div>

      <div className="flex items-center gap-2 mt-10">
        <Input.Time
          value={value}
          onChange={(e) => {
            console.log('e===>', e);
            setValue(e);
          }}
        />
        <div>controlled submitValue: {value}</div>
      </div>
    </div>
  );
};
