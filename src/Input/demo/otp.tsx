import { Input } from '@rushable/align-ui';
import React from 'react';

export default () => {
  const [otp, setOtp] = React.useState('');
  return (
    <div className="max-w-96 mx-auto">
      <Input.OTP length={6} value={otp} onChange={setOtp} />
    </div>
  );
};
