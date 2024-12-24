import React, { useEffect } from 'react';
import cn from '../utils/cn';
// @ts-ignore
import { TOKEN_SYSTEM } from '../../tailwind.config';
import Divider from '../Divider';
import { setRootPrimaryColor } from '../utils/theme';

const COLOR_MAP: any = {
  primary: {
    title: 'Primary Color Tokens',
    keys: [],
    values: [],
  },
  static: {
    title: 'Static Color Tokens',
    keys: [],
    values: [],
  },
  bg: {
    title: 'Background Color Tokens',
    keys: [],
    values: [],
  },
  text: {
    title: 'Text Color Tokens',
    keys: [],
    values: [],
  },
  stroke: {
    title: 'Stroke Color Tokens',
    keys: [],
    values: [],
  },
  icon: {
    title: 'Icon Color Tokens',
    keys: [],
    values: [],
  },
  faded: {
    title: 'Faded {state/faded}',
    keys: [],
    values: [],
  },
  information: {
    title: 'Information {state/information}',
    keys: [],
    values: [],
  },
  warning: {
    title: 'Warning {state/warning}',
    keys: [],
    values: [],
  },
  error: {
    title: 'Error {state/error}',
    keys: [],
    values: [],
  },
  success: {
    title: 'Success {state/success}',
    keys: [],
    values: [],
  },
  away: {
    title: 'Away {state/away}',
    keys: [],
    values: [],
  },
  feature: {
    title: 'Feature {state/feature}',
    keys: [],
    values: [],
  },
  verified: {
    title: 'Verified {state/verified}',
    keys: [],
    values: [],
  },
  highlighted: {
    title: 'Highlighted {state/highlighted}',
    keys: [],
    values: [],
  },
  stable: {
    title: 'Stable {state/stable}',
    keys: [],
    values: [],
  },
};

// eslint-disable-next-line guard-for-in
for (const key in TOKEN_SYSTEM) {
  const obj = TOKEN_SYSTEM[key];
  const keys = Object.keys(obj).map((v) => `${key}-${v}`);
  const values = Object.values(obj);
  // @ts-ignore
  COLOR_MAP[key].keys = keys;
  COLOR_MAP[key].values = values;
}

const PRIMARY = [
  '#335CFF',
  '#717784',
  '#FF9147',
  '#FB3748',
  '#1FC16B',
  '#F6B51E',
  '#7D52F4',
  '#47C2FF',
  '#FB4BA3',
  '#22D3BB',
];

export default function ColorTokenSystem() {
  const [primary, setPrimary] = React.useState(() => {
    return localStorage.getItem('primary-base') || PRIMARY[0];
  });

  useEffect(() => {
    localStorage.setItem('primary-base', primary);
    setRootPrimaryColor(primary);
  }, [primary]);

  const handleSelect = (c: string) => {
    setPrimary(c);
  };
  return (
    <>
      <div className="font-bold text-text-strong space-y-4">
        <div className="">Choose your Primary base colors:</div>
        <div className="flex flex-wrap items-center gap-2 cursor-pointer">
          {PRIMARY.map((v) => (
            <div
              className="w-5 h-5"
              key={v}
              style={{ backgroundColor: v }}
              onClick={() => handleSelect(v)}
            />
          ))}
          <input
            type="color"
            value={primary}
            onChange={(e) => handleSelect(e.target.value)}
          />
        </div>

        <div> Current Primary base: {primary}</div>
      </div>
      <Divider className="my-16" />
      <div className="">
        {Object.keys(COLOR_MAP).map((key) => {
          const title = COLOR_MAP[key].title;
          const keys = COLOR_MAP[key].keys;
          const values = COLOR_MAP[key].values;
          const cIndex = parseInt(keys.length / 2 + '') - 1;
          return (
            <div key={key} className="mb-12">
              <h2 className="mb-4 font-bold text-text-strong">{title}</h2>
              <div className="flex flex-wrap gap-3">
                {keys.map((v: string, index: number) => (
                  <div
                    key={v}
                    className={cn(
                      'flex justify-center items-center w-[150px] aspect-[1.15] rounded-xl',
                    )}
                    style={{ backgroundColor: values[index] }}
                  >
                    <span
                      className={cn(
                        cIndex >= index
                          ? 'text-static-white'
                          : 'text-static-black',
                      )}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
