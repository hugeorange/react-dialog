import React from 'react';

type TNoDataProps = {
  show?: boolean;
  columnsCount: number;
};
export default function NoData({ show = false, columnsCount }: TNoDataProps) {
  if (!show) return;
  return (
    <tr>
      <td colSpan={columnsCount}>
        <div className="flex items-center justify-center h-40">NO DATA</div>
      </td>
    </tr>
  );
}
