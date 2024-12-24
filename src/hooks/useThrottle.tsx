import { useRef } from 'react';

//
export function throttle<T extends any[]>(
  fn: (...args: T) => any,
  wait = 500,
  immediate = false,
): (...args: T) => void {
  let t1 = immediate ? 0 : Date.now();
  return (...args) => {
    const t2 = Date.now();
    if (t2 - t1 >= wait) {
      fn(...args);
      t1 = t2;
    }
  };
}

// useDebounce
export default function useThrottle<T extends any[]>(
  fn: (...args: T) => any,
  wait = 500,
) {
  const ref = useRef(throttle(fn, wait));
  return ref.current;
}

/**
 * 使用示例
const sum = (a: number, b: number) => a + b;

export function AAA() {
  const debounceFn = useThrottle(sum, 500);
  return <div></div>;
}
*/
