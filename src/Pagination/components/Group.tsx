import React from 'react';
import * as Button from '../../Button';
import Wrap, { TActionValue, TWrapProps } from './Wrap';

type TPaginationProps = Omit<TWrapProps, 'type' | 'children'>;

export default function Group({
  showBothEnds = true,
  currPage,
  onChange,
  ...args
}: TPaginationProps) {
  const getPageItem = (page: number | string) => {
    return (
      <Button.GroupButton
        className="w-10"
        size="xs"
        checked={+page === currPage}
        key={page}
        onClick={() => typeof page === 'number' && onChange(page)}
      >
        {page.toString().includes('...') ? '...' : page}
      </Button.GroupButton>
    );
  };

  const renderBtn = (actionValue?: TActionValue | null) => {
    if (!actionValue) return null;
    return (
      <Button.GroupButton
        className="w-10"
        size="xs"
        onClick={actionValue.onClick}
        disabled={actionValue.disabled}
      >
        {actionValue.icon}
      </Button.GroupButton>
    );
  };

  return (
    <Wrap {...args} currPage={currPage} onChange={onChange}>
      {(action, renderCell) => {
        return (
          <div className="flex">
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
