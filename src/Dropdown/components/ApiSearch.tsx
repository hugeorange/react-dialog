import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Merge } from '../../type';
import Dropdown, { TDropdownProps, TOption } from './Dropdown';

// 模糊搜索 api 生成 options 的 dropdown

type TApiRequestProps = Merge<
  TDropdownProps,
  { api: (inputValue: string) => Promise<TOption[]> }
>;

// 模糊搜索组件要求
// 如果要同时支持 label value， 保存数据时要同时保存 label value，即 option 也需要回填
// 如果仅需要支持 label，则只保存label即可，value 则需要被赋予 label 一样的值

// 多选情况下则必须同时保存 label value，即 option 也需要回填

export default function ApiRequest({ api, value, ...args }: TApiRequestProps) {
  const [opts, setOpts] = useState<TOption[]>([]);
  const [searching, setSearching] = useState(false);

  const getOptionsByApi = (value: string) => {
    api(value)
      .then((res) => {
        setOpts(res);
        setSearching(false);
      })
      .catch(() => setOpts([]))
      .finally(() => setSearching(false));
  };

  const debounceSearch = useDebounce(getOptionsByApi, 1000);

  const handleSearch = (inputValue: string) => {
    setSearching(true);
    debounceSearch(inputValue);
  };

  return (
    <Dropdown
      {...args}
      value={value}
      options={opts}
      showSearch
      searchLoading={searching}
      onSearch={handleSearch}
      triggerRender={(selected) => {
        if (args.triggerRender) return args.triggerRender(selected);
        // 选中的 options
        if (selected?.length) return selected.map((v) => v.label).join(', ');
        // 初始化回填没有 options 的情况
        return <>{Array.isArray(value) ? value.join(', ') : value}</>;
      }}
    />
  );
}
