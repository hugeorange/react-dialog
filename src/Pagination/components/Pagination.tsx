import React from 'react';
import * as Button from '../../Button';
import Cell from './CellItem';
import Wrap, { TActionValue, TWrapProps } from './Wrap';

type TPaginationProps = Omit<TWrapProps, 'children'> & {
  type?: 'basic' | 'fullRadius';
};

// pagination cell 形式

export default function Pagination({
  type,
  showBothEnds = true,
  currPage,
  onChange,
  ...args
}: TPaginationProps) {
  const getPageItem = (page: number | string) => {
    return (
      <Cell
        fullRadius={type === 'fullRadius'}
        active={+page === currPage}
        key={page}
        onClick={() => typeof page === 'number' && onChange(page)}
      >
        {page.toString().includes('...') ? '...' : page}
      </Cell>
    );
  };

  const renderBtn = (actionValue?: TActionValue | null) => {
    if (!actionValue) return null;
    return (
      <Button.Root
        type="neutral"
        style="ghost"
        size="xs"
        onClick={actionValue.onClick}
        disabled={actionValue.disabled}
      >
        <Button.Icon as={actionValue.icon} />
      </Button.Root>
    );
  };
  return (
    <Wrap {...args} currPage={currPage} onChange={onChange}>
      {(action, renderCell) => {
        return (
          <div className="flex gap-2">
            {showBothEnds && renderBtn(action.bothEnds[0])}
            {renderBtn(action.prevOrNext[0])}
            {renderCell(getPageItem)}
            {renderBtn(action.prevOrNext[1])}
            {showBothEnds && renderBtn(action.bothEnds[1])}
          </div>
        );
      }}
    </Wrap>
  );
}
