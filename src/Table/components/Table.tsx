import React, { CSSProperties, Fragment, ReactNode, useState } from 'react';
import Divider from '../../Divider';
import cn from '../../utils/cn';
import { HeaderCell, RowCell } from './Cell';
import NoData from './NoData';
import { TSortType } from './SortIcon';
import Spin from './Spin';

export type TAlign = 'left' | 'right' | 'center';

export type TRow = {
  key?: string; // 用于checkbox 选中情况
  [propName: string]: any;
};

export type TColumn<T extends TRow = TRow> = {
  className?: string | ((row: T, index: number) => string); // td 的 className
  key: string; // 这里不限定死 key 的取值
  title: ReactNode;
  align?: TAlign;
  width?: number; // 指定列宽度
  stickyLeft?: number; // 当左右滚动时固定指定列，left 值即为固定列的位置, 和 thead sticky 不可同时存在
  render?: (value: string, row: T, index: number) => ReactNode;
  onSort?: (type: TSortType, key: string) => void;
  onCell?: (row: T, index: number) => number | undefined;
};
export type TTableProps<T extends TRow = TRow> = {
  className?: string;
  layout?: 'fixed' | 'auto'; // https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout
  showHeader?: boolean; // 是否展示表头
  width?: number; // 指定 table 宽度，用于内容过长时可左右滚动宽度，默认为 100%，指定时 sticky 会失效
  columns: TColumn<T>[];
  data: T[];
  onClickRow?: (row: T, index: number) => void;
  onSelect?: (arr: string[]) => void; // 第一列出现复选框
  stickyTop?: number; // 开启表头 sticky
  footer?: ReactNode;
  loading?: boolean;
};
export default function Table<T extends TRow = TRow>({
  className,
  layout = 'fixed',
  showHeader = true,
  width,
  columns,
  data,
  onClickRow,
  onSelect,
  stickyTop,
  footer,
  loading,
}: TTableProps<T>) {
  const [select, setSelect] = useState<string[]>([]);

  const handleSelect = (checked: boolean, key?: string) => {
    let arr: string[] = [];
    if (key) {
      arr = checked ? [...select, key] : select.filter((k) => k !== key);
    } else {
      arr = checked ? data.map((row) => row.key!) : [];
    }
    setSelect(arr);
    onSelect?.(arr);
  };

  const getHeaderCellProps = (index: number) => {
    const col = columns[index];
    const props: Record<string, any> = {};
    if (col.onSort) {
      props['onSort'] = (type: TSortType) => col.onSort?.(type, col.key);
    }
    if (onSelect && index === 0) {
      props['onChecked'] = (checked: boolean) => handleSelect(checked);
      props['checked'] = !select.length
        ? false
        : select.length !== data.length
        ? 'indeterminate'
        : select.length === data.length;
    }
    return props;
  };

  const getRowCellProps = (row: T, index: number) => {
    const props: TRow = {};
    if (onSelect && index === 0) {
      props['checked'] = select.includes(row.key!);
      props['onChecked'] = (checked: boolean) => handleSelect(checked, row.key);
    }
    return props;
  };

  const getTheadStyle = (): CSSProperties => {
    if (width) return {};
    return {
      position: stickyTop ? 'sticky' : undefined,
      top: `${stickyTop}px`,
      zIndex: stickyTop ? 9 : undefined,
    };
  };

  const getColumnStyle = (col: TColumn<T>): CSSProperties => {
    return {
      width: col.width ? `${col.width}px` : undefined,
      position: col.stickyLeft !== undefined ? 'sticky' : undefined,
      left: col.stickyLeft !== undefined ? `${col.stickyLeft}px` : undefined,
      zIndex: col.stickyLeft !== undefined ? 10 : undefined,
    };
  };

  const renderColumn = (row: T, rowIdx: number) => {
    const els = [];
    let prevColspan;
    let currColspan;
    let colspanIdx = -1;
    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];

      currColspan = col.onCell?.(row, rowIdx) ?? undefined;

      if (currColspan) {
        colspanIdx = i;
        prevColspan = currColspan;
      }

      if (colspanIdx > -1 && !currColspan && prevColspan! + colspanIdx > i) {
        continue;
      }

      els.push(
        <RowCell
          className={
            typeof col.className === 'function'
              ? col.className(row, rowIdx)
              : col.className
          }
          key={`${col.key}-${i}`}
          align={col.align}
          style={getColumnStyle(col)}
          colspan={currColspan === 1 ? undefined : currColspan}
          {...getRowCellProps(row, i)}
        >
          {col.render ? col.render(row[col.key], row, rowIdx) : row[col.key]}
        </RowCell>,
      );
    }
    return els;
  };

  return (
    <div className={cn('relative', className)}>
      {/* TODO LOADING 样式待确认 */}
      <Spin show={loading} />
      <div className={cn('ru-table', { 'overflow-x-auto': !!width })}>
        <table
          className={cn(
            'bg-bg-white',
            layout === 'fixed' ? 'table-fixed' : 'table-auto',
          )}
          style={{ width: width ? `${width}px` : undefined }}
        >
          {showHeader && (
            <thead style={getTheadStyle()}>
              <tr>
                {columns.map((col, idx) => (
                  <HeaderCell
                    key={col.key}
                    style={getColumnStyle(col)}
                    align={col.align}
                    {...getHeaderCellProps(idx)}
                  >
                    {col.title}
                  </HeaderCell>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {/* TODO NO DATA 样式待定 */}
            <NoData
              show={!data.length && !loading}
              columnsCount={columns.length}
            />
            {data.map((row, rowIdx) => (
              <Fragment key={`row-${rowIdx}`}>
                <tr
                  className={cn('paragraph-s')}
                  onClick={() => onClickRow?.(row, rowIdx)}
                >
                  {renderColumn(row, rowIdx)}
                </tr>
                {rowIdx < data.length - 1 && (
                  <tr>
                    <td colSpan={columns.length}>
                      <Divider type="line-spacing" />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {footer}
    </div>
  );
}
