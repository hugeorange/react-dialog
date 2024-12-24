import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from '@remixicon/react';

import React, { cloneElement } from 'react';
import cn from '../../utils/cn';

const IconMap = {
  error: <RiErrorWarningFill />,
  warning: <RiAlertFill />,
  success: <RiCheckboxCircleFill />,
  info: <RiInformationFill />,
};

export default function IconTips(type: keyof typeof IconMap) {
  return (
    <div
      className={cn('w-10 h-10 rounded-10 flex justify-center items-center', {
        'bg-error-lighter text-error-base': type === 'error',
        'bg-warning-lighter text-warning-base': type === 'warning',
        'bg-success-lighter text-success-base': type === 'success',
        'bg-information-lighter text-information-base': type === 'info',
      })}
    >
      {cloneElement(IconMap[type], { size: 24 })}
    </div>
  );
}
