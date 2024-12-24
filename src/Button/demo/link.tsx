import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

import { Button } from '@rushable/align-ui';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React from 'react';
import cn from '../../utils/cn';
import { TButtonLinkStyle } from '../components/LinkButton';

const colorArr = ['primary', 'gray', 'black', 'error', 'modifiable'] as const;
const sizeArr = ['m', 's'] as const;

export default function LinkDemo() {
  const [filterBody, check, radio] = useDemoFilter({
    checkboxArr: ['disabled'],
    radioArr: [{ label: 'color', value: colorArr }],
  });
  return (
    <div className="flex flex-col gap-8 py-4 overflow-auto">
      {filterBody()}
      {radio[0].color === 'modifiable' && <div>通过 className 自定义颜色</div>}
      <div
        className={cn('flex flex-col gap-6', {
          'text-success-base': radio[0].color === 'modifiable',
        })}
      >
        {sizeArr.map((s) => (
          <div className="flex gap-4" key={s}>
            <Button.Link
              size={s}
              disabled={check[0].disabled}
              style={radio[0].color as TButtonLinkStyle}
            >
              <Button.Icon as={<RiArrowLeftSLine />} />
              Button
              <Button.Icon as={<RiArrowRightSLine />} />
            </Button.Link>

            <Button.Link
              size={s}
              underline
              disabled={check[0].disabled}
              style={radio[0].color as TButtonLinkStyle}
            >
              <Button.Icon as={<RiArrowLeftSLine />} />
              Button
              <Button.Icon as={<RiArrowRightSLine />} />
            </Button.Link>
          </div>
        ))}
      </div>
    </div>
  );
}
