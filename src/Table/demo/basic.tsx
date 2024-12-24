import { Button, Pagination, Radio, Table } from '@rushable/align-ui';
import { TColumn } from '@rushable/align-ui/Table';
import React, { ReactElement, useEffect, useState } from 'react';

type TData = {
  key: string;
  sort_value: number;
  name1: ReactElement | string;
  name2: string;
  name3: string;
  name4: string;
  name5: string;
  name6: string;
  name7: string;
};

const TABLE_DATA: TData[] = [];

for (let i = 0; i < 50; i++) {
  TABLE_DATA.push({
    key: `c_${i}`,
    sort_value: +(Math.random() * 100).toFixed(2),
    name1: `Edward King  ${i}`,
    name2: `London Park no.  ${i}`,
    name3: `London No. 1 Lake Park	  ${i}`,
    name4: `Sydney No. 1 Lake Park	  ${i}`,
    name5: `Everything  ${i}`,
    name6: `beginning  ${i}`,
    name7: `has an  ${i}`,
  });
}

type TCurrType = 'sticky' | 'width' | 'small_data' | 'pagination';
console.log(TABLE_DATA);
export default () => {
  const [data, setData] = useState(() => TABLE_DATA.slice(0, 10));
  const [currPage, setCurrPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [currType, setCurrType] = useState<TCurrType>('small_data');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    changeType();
    window.addEventListener('resize', changeType);
    return () => window.removeEventListener('resize', changeType);
  }, []);

  const changeType = () => {
    const width = window.innerWidth;

    if (width <= 580) {
      setCurrType('width');
    }
  };

  useEffect(() => {
    if (currType === 'pagination') {
      setLoading(true);
      setTimeout(() => {
        const currIndex = (currPage - 1) * 10;
        const newData = TABLE_DATA.slice(currIndex, currIndex + pageSize);
        setData(newData);
        setLoading(false);
      }, 2000);
    }
    if (currType === 'sticky') {
      setData(TABLE_DATA);
    }
    if (currType === 'width') {
      setData(TABLE_DATA.slice(0, 10));
    }
  }, [currType, currPage, pageSize]);

  const columns: TColumn<(typeof TABLE_DATA)[0]>[] = [
    {
      title: 'Company Name1',
      key: 'name1',
      align: 'left',
      stickyLeft: currType === 'width' ? 0 : undefined,
      width: 200,
      onCell: (row, index) => (index === 0 ? 4 : undefined),
      render: (value, record, index) => {
        if (index === 0) {
          return (
            <div className=" overflow-hidden truncate label-s text-primary-base ">
              你好aa你你哈哈 你好 你好 你好 aa你你哈哈 你好 你好 你好
            </div>
          );
        }
        return value;
      },
    },
    {
      title: 'Company Name1',
      key: 'sort_value',
      onSort: (type, key) => {
        console.log(key, type);
        if (type === 'default') {
          setData(TABLE_DATA);
        } else {
          setData(
            [...data].sort((a, b) =>
              type === 'up'
                ? a['sort_value'] - b['sort_value']
                : b['sort_value'] - a['sort_value'],
            ),
          );
        }
      },
    },
    { title: 'Company Name2', key: 'name2' },
    { title: 'Company Name3', key: 'name3' },
    { title: 'Company Name4', key: 'name4' },
    { title: 'Company Name5', key: 'name5' },
    {
      title: 'Company Name6',
      key: 'name6',
    },
    {
      title: 'Company Name7',
      key: 'name7',
      width: 120,
      render: (value, row, index) => (
        <Button.Link>
          {value}-{index}
        </Button.Link>
      ),
    },
  ];

  const getTableProps = () => {
    if (currType === 'width') {
      return {
        columns: columns,
        width: 1600,
      };
    }
    if (currType === 'small_data') {
      return {
        columns: [columns[0], columns[1], columns[6], columns[7]],
        stickyTop: 75,
      };
    }
    if (currType === 'sticky') {
      return {
        columns: columns,
        stickyTop: 75,
      };
    }
    return {
      columns: [columns[0], columns[1], columns[6], columns[7]],
      stickyTop: 75,
    };
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="my-8">
        <Radio.Group
          className="flex gap-4 flex-wrap"
          value={currType}
          onChange={(e) => setCurrType(e as TCurrType)}
        >
          <Radio.Root value="sticky">sticky</Radio.Root>
          <Radio.Root value="width">fixed width overflow</Radio.Root>
          <Radio.Root value="small_data">small amount of data</Radio.Root>
          <Radio.Root value="pagination">pagination</Radio.Root>
        </Radio.Group>
      </div>
      <Table
        loading={loading}
        data={data}
        {...getTableProps()}
        onSelect={(arr) => console.log(arr)}
        onClickRow={(row, index) => console.log(row, index)}
        footer={
          currType === 'pagination' && (
            <Pagination.Root
              className="mt-4"
              total={TABLE_DATA.length}
              currPage={currPage}
              pageSize={pageSize}
              onSizeChange={(pageSize) => setPageSize(pageSize)}
              onChange={(page) => setCurrPage(page)}
            />
          )
        }
      />
    </div>
  );
};
