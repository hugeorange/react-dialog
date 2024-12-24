import { Pagination } from '@rushable/align-ui';
import React, { useState } from 'react';

export default () => {
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  return (
    <div className="overflow-x-auto pt-4 pb-8">
      <div className="w-[780px] flex flex-col gap-8">
        <Pagination.Root
          currPage={page}
          onChange={setPage}
          total={98}
          pageSize={size}
          onSizeChange={setSize}
        />
        <Pagination.Root
          currPage={page2}
          onChange={setPage2}
          total={30}
          type="fullRadius"
          pageSize={size}
          onSizeChange={setSize}
        />
        <Pagination.Group
          currPage={page3}
          onChange={setPage3}
          total={84}
          pageSize={size}
          onSizeChange={setSize}
        />
      </div>
    </div>
  );
};
