import { RiFlashlightFill } from '@remixicon/react';
import { Badge } from '@rushable/align-ui';
import useDemoFilter from '@rushable/align-ui/hooks/useDemoFilter';
import React from 'react';
import { TBadgeColor, TBadgeStyle } from '../components/Badge';

const styleArr = ['filled', 'light', 'lighter', 'stroke'] as const;
const colorArr = [
  'blue',
  'gray',
  'orange',
  'red',
  'green',
  'yellow',
  'purple',
  'sky',
  'pink',
  'teal',
] as const;

export default function BasicBadge() {
  const [filterBody, check, radio] = useDemoFilter({
    checkboxArr: ['disabled'],
    radioArr: [
      { label: 'style', value: styleArr },
      { label: 'color', value: colorArr },
    ],
  });

  return (
    <div className="flex flex-col py-8 gap-8 ">
      {filterBody()}
      {(['m', 's'] as const).map((s) => (
        <div className="flex gap-8 flex-wrap" key={s}>
          <Badge.Root
            size={s}
            color={radio[1].color as TBadgeColor}
            style={radio[0].style as TBadgeStyle}
            disabled={check[0].disabled}
          >
            Badge
          </Badge.Root>
          <Badge.Root
            size={s}
            color={radio[1].color as TBadgeColor}
            style={radio[0].style as TBadgeStyle}
            disabled={check[0].disabled}
          >
            <Badge.Dot />
            Badge
          </Badge.Root>
          <Badge.Root
            size={s}
            color={radio[1].color as TBadgeColor}
            style={radio[0].style as TBadgeStyle}
            disabled={check[0].disabled}
          >
            <Badge.Icon as={<RiFlashlightFill />} />
            Badge
          </Badge.Root>
          <Badge.Root
            size={s}
            color={radio[1].color as TBadgeColor}
            style={radio[0].style as TBadgeStyle}
            disabled={check[0].disabled}
          >
            Badge
            <Badge.Icon as={<RiFlashlightFill />} />
          </Badge.Root>
          <Badge.Root
            className="flex-shrink-0"
            isNumber
            size={s}
            color={radio[1].color as TBadgeColor}
            style={radio[0].style as TBadgeStyle}
            disabled={check[0].disabled}
          >
            2
          </Badge.Root>
        </div>
      ))}
    </div>
  );
}
