import React from 'react';
import cn from '../../utils/cn';

// Checkbox Icon
export const CheckboxIcon = ({
  className = '',
  toggle = false,
  disabled = false,
  checked = false,
  indeterminate = false,
}: {
  className?: string;
  toggle?: boolean;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
}) => {
  return (
    <span className={cn(toggle ? 'icon-wrap-toggle' : 'icon-wrap', className)}>
      {toggle
        ? renderToggleIcon(disabled, checked)
        : renderCheckboxIcon(disabled, checked, indeterminate)}
    </span>
  );
};

const renderCheckboxIcon = (
  disabled = false,
  checked = false,
  indeterminate = false,
) => {
  const indeterminateIcon = (
    <svg
      width="8"
      height="2"
      viewBox="0 0 8 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.75V0.25H8V1.75H0Z"
        fill="white"
      />
    </svg>
  );

  const checkedIcon = (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 3.5L4 6.5L9 1.5" />
    </svg>
  );

  return (
    <span
      className={cn('checkbox-icon', {
        checked: checked || indeterminate,
        disabled,
      })}
    >
      {checked ? checkedIcon : indeterminate ? indeterminateIcon : null}
    </span>
  );
};

const renderToggleIcon = (disabled = false, checked = false) => {
  return (
    <span
      className={cn('toggle-bg', {
        checked: checked,
        disabled,
      })}
    >
      <span className="toggle-icon" />
    </span>
  );
};
