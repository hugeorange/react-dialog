import { useEffect, useState } from 'react';

export default function usePosArr(wrapId: string, childClassName: string) {
  const [posArr, setPosArr] = useState<{ left: number; width: number }[]>([]);

  useEffect(() => {
    const pDom = document.querySelector(wrapId);
    const doms = document.querySelectorAll(`${wrapId} ${childClassName}`) || [];
    const pDomRect = pDom?.getBoundingClientRect();
    const posArr = Array.from(doms).map((dom) => {
      const rect = dom?.getBoundingClientRect();
      return {
        left: rect?.left - pDomRect!.left,
        width: rect?.width,
      };
    });
    setPosArr(posArr);
  }, []);

  return posArr;
}
