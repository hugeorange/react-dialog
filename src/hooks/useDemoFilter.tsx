import { Checkbox, Radio } from '@rushable/align-ui';
import React, { useState } from 'react';

type TFilterType = {
  checkboxArr: string[];
  radioArr: Array<{
    label: string;
    value: readonly string[];
  }>;
};

export default function useDemoFilter({ checkboxArr, radioArr }: TFilterType) {
  const [check, setCheck] = useState(checkboxArr.map((v) => ({ [v]: false })));

  const [radio, setRadio] = useState(
    radioArr.map((v) => ({ [v.label]: v.value[0] })),
  );

  const filterBody = () => {
    return (
      <>
        <div className="flex">
          {checkboxArr.map((v, idx) => (
            <Checkbox.Root
              className="w-[120px]"
              key={v}
              toggle
              checked={check[idx][v]}
              onChange={(e) => {
                check[idx][v] = e.target.checked;
                setCheck([...check]);
              }}
            >
              {v}
            </Checkbox.Root>
          ))}
        </div>
        {radioArr.map((v, idx) => (
          <div className="flex" key={v.label}>
            <div className="mr-3">{v.label}: </div>
            <Radio.Group
              key={v.label}
              className="flex gap-2 flex-wrap"
              value={radio[idx][v.label]}
              onChange={(e) => {
                radio[idx][v.label] = e;
                setRadio([...radio]);
              }}
            >
              {v.value.map((k) => (
                <Radio.Root key={k} value={k}>
                  {k}
                </Radio.Root>
              ))}
            </Radio.Group>
          </div>
        ))}
      </>
    );
  };

  return [filterBody, check, radio] as const;
}
