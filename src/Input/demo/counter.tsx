import { Counter } from '@rushable/align-ui/Input';
import React, { useState } from 'react';

export default () => {
  const [amount, setAmount] = useState('16');
  const [amount1, setAmount1] = useState('16');
  const [amount2, setAmount2] = useState('16');
  const [amount3, setAmount3] = useState('16');
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <Counter
          required
          placeholder="Placeholder text..."
          value={amount}
          onChange={(e) => {
            console.log(e.target.value);
            setAmount(e.target.value);
          }}
        />

        <Counter
          required
          precision={2}
          min={-30}
          max={123456}
          placeholder="Placeholder text..."
          value={amount1}
          onChange={(e) => {
            console.log(e.target.value);
            setAmount1(e.target.value);
          }}
        />

        <Counter
          required
          disabled
          placeholder="Placeholder text..."
          value={amount2}
          onChange={(e) => setAmount2(e.target.value)}
        />

        <Counter
          required
          min={-3}
          max={15}
          placeholder="Placeholder text..."
          error
          value={amount3}
          onChange={(e) => setAmount3(e.target.value)}
        />
      </div>
    </>
  );
};
