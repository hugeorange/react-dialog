import { Hint, Label } from '@rushable/align-ui';
import {
  Amount,
  Email,
  Numeric,
  Password,
  Phone,
  Search,
} from '@rushable/align-ui/Input';
import React, { useState } from 'react';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [amount2, setAmount2] = useState('');
  const [amount3, setAmount3] = useState('');
  const [amount4, setAmount4] = useState('');
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <Email
          required
          placeholder="Placeholder text..."
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        >
          <Label text="Email Address" />

          <Hint>This is a hint text to help user.</Hint>
        </Email>

        <Search
          required
          placeholder="Placeholder text..."
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        >
          <Label text="Search" />
          <Hint>This is a hint text to help user.</Hint>
        </Search>

        <Password
          required
          placeholder="Placeholder text..."
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        >
          <Label text="Password" />
          <Hint>This is a hint text to help user.</Hint>
        </Password>

        <Phone
          required
          placeholder="Placeholder text..."
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        >
          <Label text="Phone" />
          <Hint>auto format (123) 456-7890</Hint>
        </Phone>
      </div>
      <hr className="my-8" />
      <h3 className="mb-4">数字、金额类型的 Input</h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <Amount
          required
          format
          max={123456}
          placeholder="Placeholder text..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        >
          <Label text="Amount Price Label" />
          <Hint>max 123456</Hint>
        </Amount>

        <Amount
          required
          format
          precision={0}
          placeholder="Placeholder text..."
          value={amount2}
          onChange={(e) => setAmount2(e.target.value)}
        >
          <Label text="Amount Price Label" />
          <Hint>no limit precision 0</Hint>
        </Amount>

        <Numeric
          required
          placeholder="Placeholder text..."
          value={amount3}
          onChange={(e) => setAmount3(e.target.value)}
        >
          <Label text="Numeric Label" />
          <Hint>no limit</Hint>
        </Numeric>

        <Numeric
          required
          precision={2}
          min={-3}
          max={15}
          placeholder="Placeholder text..."
          value={amount4}
          onChange={(e) => setAmount4(e.target.value)}
        >
          <Label text="Numeric Label" />
          <Hint>limit min -3, max 15 precision 2</Hint>
        </Numeric>
      </div>
    </>
  );
};
