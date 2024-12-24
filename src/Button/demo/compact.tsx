import { RiCloseLine } from '@remixicon/react';
import { Button } from '@rushable/align-ui';
import React, { Fragment } from 'react';

export default function BasicDemo() {
  const color = ['stroke', 'ghost', 'white'] as const;
  const size = ['l', 'm'] as const;

  return (
    <div className="flex gap-8 py-8">
      <div className="flex flex-col gap-4">
        {size.map((s, idx) => (
          <Fragment key={idx}>
            <div className="flex justify-between gap-6 flex-wrap">
              {color.map((v) => (
                <Button.Compact
                  key={v}
                  icon={<RiCloseLine />}
                  size={s}
                  style={v}
                />
              ))}
              <Button.Compact icon={<RiCloseLine />} size={s} disabled />
            </div>
            <div className="flex justify-between gap-6 flex-wrap">
              {color.map((v) => (
                <Button.Compact
                  key={v}
                  isFullRadius
                  icon={<RiCloseLine />}
                  size={s}
                  style={v}
                />
              ))}
              <Button.Compact
                isFullRadius
                icon={<RiCloseLine />}
                size={s}
                disabled
              />
            </div>
            {idx === 0 && <hr className="my-4" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
