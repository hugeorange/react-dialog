import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import { Button } from '@rushable/align-ui';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React, { Fragment } from 'react';
import { TFancyButtonSize } from '../components/FancyButton';

const colorArr = ['neutral', 'primary', 'error', 'basic'] as const;
const sizeArr = ['m', 's', 'xs'] as const;

export default function BasicDemo() {
  const [filterBody, check, radio] = useDemoFilter({
    checkboxArr: ['disabled', 'loading'],
    radioArr: [{ label: 'size', value: sizeArr }],
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      {filterBody()}
      <div className="flex gap-6 flex-wrap">
        {colorArr.map((v) => (
          <Fragment key={v}>
            <Button.Fancy
              type={v}
              disabled={check[0].disabled}
              loading={check[1].loading}
              size={radio[0].size as TFancyButtonSize}
            >
              <Button.Icon as={<RiArrowLeftSLine />} />
              Button
              <Button.Icon as={<RiArrowRightSLine />} />
            </Button.Fancy>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
