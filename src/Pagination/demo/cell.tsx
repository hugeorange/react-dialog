import React from 'react';
import Cell from '../components/CellItem';

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8">
        <Cell>1</Cell>
        <Cell disabled>1</Cell>
      </div>
      <div className="flex gap-8">
        <Cell fullRadius>1</Cell>
        <Cell fullRadius disabled>
          1
        </Cell>
      </div>
    </div>
  );
};
