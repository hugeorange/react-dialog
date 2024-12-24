import { Dropdown } from '@rushable/align-ui';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React, { useState } from 'react';

// @ts-ignore
// import ImageAvatar from '../../Avatar/demo/avatar-image.png';

export default () => {
  const [checked, setChecked] = useState(false);
  const typeArr = ['radio', 'checkbox', 'none'];
  const [filterBody, , radio] = useDemoFilter({
    checkboxArr: [],
    radioArr: [{ label: 'type', value: typeArr }],
  });
  return (
    <div className="flex flex-col justify-between bg-bg-white pb-48 gap-10 max-md:p-0 p-8">
      {filterBody()}
      <Dropdown.SingleItem
        type={radio[0].type as any}
        label="label"
        subLabel="subLabel"
        description="Descriptions"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
    </div>
  );
};
