import { Label } from '@rushable/align-ui';
import * as Dropdown from '@rushable/align-ui/Dropdown';
import { Trigger } from '@rushable/align-ui/Input';
import React from 'react';

export default () => {
  const [value, setValue] = React.useState('Luis Miguel Hernádez - 12');
  const [value2, setValue2] = React.useState<string[]>(['12', '32']);
  return (
    <div className="flex flex-col gap-10">
      <Dropdown.ApiSearch
        searchPlaceholder="input content to search..."
        value={value}
        onChange={(value, opt) => setValue(opt[0].label as string)}
        api={(value: string) =>
          new Promise((resolve) => {
            fetch('https://randomuser.me/api/?results=5').then(async (res) => {
              const r = await res.json();
              const options = r.results.map((item: any) => {
                const label = `${item.name.first} ${item.name.last} - ${value}`;
                return { label, value: label };
              });
              resolve(options);
            });
          })
        }
      >
        <Label text="api search options" />
        <Trigger placeholder="api search placeholder text..." />
      </Dropdown.ApiSearch>
      <Dropdown.ApiSearch
        searchPlaceholder="input content to search..."
        value={value2}
        multiple
        onChange={(value, opt) => setValue2(opt.map((v) => v.label as string))}
        triggerRender={(opt) => opt.map((v) => v.label).join(', ')}
        api={(value: string) =>
          new Promise((resolve, reject) => {
            fetch('https://randomuser.me/api/?results=5')
              .then(async (res) => {
                const r = await res.json();
                const options = r.results.map((item: any) => {
                  const label = `${item.name.first} ${item.name.last} - ${value}`;
                  return { label, value: label };
                });
                resolve(options);
              })
              .catch((e) => {
                console.error(e);
                reject(e);
              });
          })
        }
      >
        <Label text="api search options multiple" />
        <Trigger placeholder="api search placeholder text..." />
      </Dropdown.ApiSearch>
    </div>
  );
};
