import { OTPInput, OTPInputContext } from 'input-otp';
import React from 'react';

import cn from '../../utils/cn';

type TOtpProps = {
  className?: string;
  length: number;
  value: string;
  onChange: (value: string) => void;
};
export default function OTP({
  className,
  length = 4,
  value,
  onChange,
}: TOtpProps) {
  return (
    <OTPInput
      containerClassName={cn(className, 'ru-otp')}
      maxLength={length}
      value={value}
      onChange={onChange}
    >
      {Array.from({ length }).map((_, index) => (
        <InputOTPSlot key={index} index={index} />
      ))}
    </OTPInput>
  );
}

// TODO 需要提供手机端样式

const InputOTPSlot = ({ index }: { index: number }) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div className={cn('otp-slot', { active: isActive })}>
      <span className="title-h5">{char}</span>
      {hasFakeCaret && (
        <div className="fake-caret">
          <div className="w-0.5 h-8  bg-bg-strong" />
        </div>
      )}
    </div>
  );
};
