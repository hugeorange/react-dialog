import React from 'react';
import SortIcon from '../components/SortIcon';

export default () => {
  return (
    <div className="flex flex-col gap-8">
      <SortIcon type="default"></SortIcon>
      <SortIcon type="up"></SortIcon>
      <SortIcon type="down"></SortIcon>
    </div>
  );
};
