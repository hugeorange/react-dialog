import React from 'react';
import cn from '../../utils/cn';

// Radio Icon
export const RadioIcon = ({
  disabled = false,
  checked = false,
}: {
  disabled?: boolean;
  checked?: boolean;
}) => {
  return (
    <span className="icon-wrap">
      <span
        className={cn('radio-icon', {
          checked: checked,
          disabled,
        })}
      />
    </span>
  );
};
