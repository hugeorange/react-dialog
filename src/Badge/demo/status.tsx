import { RiStore2Line } from '@remixicon/react';
import { Badge } from '@rushable/align-ui';
import React from 'react';

export default function StatusBadgeDemo() {
  const styleArr = ['stroke', 'light'] as const;
  const statusArr = ['completed', 'pending', 'failed', 'disabled'] as const;
  return (
    <div className="flex py-6 flex-wrap gap-16">
      {styleArr.map((style) => (
        <div key={style} className="flex flex-col gap-4">
          {statusArr.map((status) => (
            <div className="flex  gap-4" key={status}>
              <Badge.Status style={style} status={status}>
                Badge
              </Badge.Status>
            </div>
          ))}
          <Badge.Status style={style} showDot>
            Badge
          </Badge.Status>
          <Badge.Status
            style={style}
            icon={<RiStore2Line size={16} className="text-faded-base" />}
          >
            Badge
          </Badge.Status>
        </div>
      ))}
    </div>
  );
}
