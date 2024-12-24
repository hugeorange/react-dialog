import { useRef } from 'react';

// debounce 原始函数
export function debounce<T extends any[]>(
  fn: (...args: T) => any,
  wait: number,
): (...args: T) => void {
  let timer: NodeJS.Timeout | null = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}

// useDebounce
export default function useDebounce<T extends any[]>(
  fn: (...args: T) => any,
  wait = 500,
) {
  const ref = useRef(debounce(fn, wait));
  return ref.current;
}

/**
 * 使用示例
const sum = (a: number, b: number) => a + b;

export function AAA() {
  const debounceFn = useDebounce(sum, 500);
  return <div></div>;
}
*/
