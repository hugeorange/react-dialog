import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiFileCopyLine,
} from '@remixicon/react';
import { Button } from '@rushable/align-ui';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React from 'react';
import { TButtonSize, TButtonType } from '../components/Button';

const types = ['primary', 'neutral', 'error'] as const;
const sizes = ['xl', 'l', 'm', 's', 'xs', '2xs'] as const;
const styles = ['filled', 'stroke', 'lighter', 'ghost'] as const;

export default function BasicDemo() {
  const [filterBody, check, radio] = useDemoFilter({
    checkboxArr: ['disabled', 'loading'],
    radioArr: [
      { label: 'size', value: sizes },
      { label: 'type', value: types },
    ],
  });

  return (
    <div className="flex flex-col py-6 gap-6">
      {filterBody()}
      <div className="flex flex-wrap gap-10">
        {styles.map((s) => (
          <div className="flex gap-4" key={s}>
            <Button.Root
              // className="w-32"
              style={s}
              type={radio[1].type as TButtonType}
              size={radio[0].size as TButtonSize}
              loading={check[1].loading}
              disabled={check[0].disabled}
              onKeyDown={(e) => {
                console.log(e.key);
              }}
            >
              <Button.Icon as={<RiArrowLeftSLine />} />
              Button
              <Button.Icon as={<RiArrowRightSLine />} />
            </Button.Root>
            <Button.Root
              style={s}
              type={radio[1].type as TButtonType}
              size={radio[0].size as TButtonSize}
              loading={check[1].loading}
              disabled={check[0].disabled}
            >
              <Button.Icon as={<RiFileCopyLine />} />
            </Button.Root>
          </div>
        ))}
      </div>
    </div>
  );
}
