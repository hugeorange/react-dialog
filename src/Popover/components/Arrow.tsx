import React, { cloneElement } from 'react';

// 16 8
// 12 6
// 8 4
type TPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TArrowSize = 'l' | 'm' | 's';
type TArrowProps = {
  className?: string;
  stroke: string;
  style: React.CSSProperties;
  placement: TPlacement;
  size: TArrowSize; // 三角标的大小
};
export default function Arrow({
  className,
  style,
  stroke = '#000',
  placement = 'bottom',
  size,
}: TArrowProps) {
  const rotateMap = {
    top: {},
    bottom: { transform: 'rotate(180deg)' },
    left: {},
    right: { transform: 'rotate(180deg)' },
  };

  const arrowSizeMap = {
    l: {
      top: (
        <svg
          width="24"
          height="13"
          viewBox="0 0 24 13"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.5L21.2071 3.5L20.3536 4.35355L13.7678 10.9393C12.7915 11.9156 11.2085 11.9157 10.2322 10.9393L3.64645 4.35356L2.79289 3.5L4 3.5L20 3.5Z"
            fill="currentColor"
            style={{ stroke }}
          />
          <rect width="24" height="4" rx="2" fill="currentColor" />
        </svg>
      ),
      left: (
        <svg
          width="13"
          height="24"
          viewBox="0 0 13 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 4L3.5 2.79289L4.35355 3.64645L10.9393 10.2322C11.9156 11.2085 11.9157 12.7915 10.9393 13.7678L4.35356 20.3536L3.5 21.2071L3.5 20L3.5 4Z"
            fill="currentColor"
            style={{ stroke }}
          />
          <rect
            y="24"
            width="24"
            height="4"
            rx="2"
            transform="rotate(-90 0 24)"
            fill="currentColor"
          />
        </svg>
      ),
    },
    m: {
      top: (
        <svg
          width="18"
          height="9"
          viewBox="0 0 18 9"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1.5L16.2071 1.5L15.3536 2.35355L10.4142 7.29289C9.63316 8.07394 8.36684 8.07394 7.58579 7.29289L2.64645 2.35355L1.79289 1.5L3 1.5L15 1.5Z"
            fill="currentColor"
            style={{ stroke }}
          />
          <rect
            x="18"
            y="2"
            width="18"
            height="2"
            rx="1"
            transform="rotate(-180 18 2)"
            fill="currentColor"
          />
        </svg>
      ),
      left: (
        <svg
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3L1.5 1.79289L2.35355 2.64645L7.29289 7.58579C8.07394 8.36684 8.07394 9.63316 7.29289 10.4142L2.35355 15.3536L1.5 16.2071L1.5 15L1.5 3Z"
            fill="currentColor"
            style={{ stroke }}
          />
          <rect
            y="18"
            width="18"
            height="2"
            rx="1"
            transform="rotate(-90 0 18)"
            fill="currentColor"
          />
        </svg>
      ),
    },
    s: {
      top: (
        <svg
          width="14"
          height="7"
          viewBox="0 0 14 7"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 1.5L12.7071 1.5L11.8536 2.35355L8.91421 5.29289C8.13317 6.07394 6.86684 6.07394 6.08579 5.29289L3.14645 2.35355L2.29289 1.5L3.5 1.5L11.5 1.5Z"
            fill="currentColor"
            style={{ stroke }}
          />
          <rect
            x="14"
            y="2"
            width="14"
            height="2"
            rx="1"
            transform="rotate(-180 14 2)"
            fill="currentColor"
          />
        </svg>
      ),
      left: (
        <svg
          width="7"
          height="14"
          viewBox="0 0 7 14"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3L1.5 1.79289L2.35355 2.64645L5.29289 5.58579C6.07394 6.36683 6.07394 7.63316 5.29289 8.41421L2.35355 11.3536L1.5 12.2071L1.5 11L1.5 3Z"
            fill="currentColor"
            style={{ stroke }}
          />
          <rect
            y="14"
            width="14"
            height="2"
            rx="1"
            transform="rotate(-90 0 14)"
            fill="currentColor"
          />
        </svg>
      ),
    },
  };
  const arrowDir: Record<TPlacement, 'top' | 'left'> = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left',
  };

  return cloneElement(arrowSizeMap[size][arrowDir[placement]], {
    className: className,
    style: { ...style, ...rotateMap[placement] },
    fill: 'currentColor',
  });
}
