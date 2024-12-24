import { AnimatePresence, motion } from 'framer-motion';
import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import cn from '../../utils/cn';
import { getDomRect } from '../../utils/screen';
import Arrow, { TArrowSize } from './Arrow';
import { PopoverContext } from './Popover';

type TAnimateParams = {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit: Record<string, any>;
};

// 透明度_缩放动画
export const opacity_scale = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};
// 透明度_向上位移动画
export const opacity_y = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 32 },
};

export type TPlacement =
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'topRight'
  | 'top'
  | 'topLeft'
  | 'rightBottom'
  | 'right'
  | 'rightTop'
  | 'leftBottom'
  | 'left'
  | 'leftTop';
type TPanelProps = {
  className?: string;
  allowClose?: boolean; // 非受控模式下点击 content 内容时自动关闭
  children: React.ReactNode;
  style?: React.CSSProperties; // panel 除定位以外的样式
  placement: TPlacement;
  animateParams?: TAnimateParams; // content 展开动画，参照 https://motion.dev/docs/react-quick-start
  offset?: number; // panel 距离 trigger 的距离
  showArrow?: boolean;
  arrowSize?: TArrowSize;
  arrowCls?: string; // 箭头背景颜色 svg 颜色即 color
  arrowBorderColor?: string; // 箭头边框颜色 默认 var(--stroke-soft) , '' 为不设置颜色
};
// 箭头高度
const arrowHeightMap = {
  l: 8,
  m: 6,
  s: 4,
};
export default function Content({
  className,
  allowClose = false,
  children,
  style,
  placement,
  offset = 12,
  animateParams,
  showArrow = false,
  arrowSize = 'l',
  arrowCls,
  arrowBorderColor = 'var(--stroke-soft)',
}: TPanelProps) {
  const { open, id, onOpenChange } = useContext(PopoverContext);
  // 展开方向
  const [dir, setDir] = useState(placement);

  useEffect(() => {
    if (!open) return;

    setTimeout(() => {
      const trigger = document.getElementById(`popover_trigger_${id}`);
      const content = document.getElementById(`popover_content_${id}`);
      if (!trigger && !content) return;
      const triggerRect = getDomRect(trigger!);
      const contentRect = {
        width: content!.offsetWidth,
        height: content!.offsetHeight,
      };
      adjustDirection(triggerRect, contentRect);
    });
  }, [open]);

  // 根据 trigger 所在位置调整 content 展开方向
  const adjustDirection = (
    triggerRect: ReturnType<typeof getDomRect>,
    contentRect: { width: number; height: number },
  ) => {
    // 需要调整方向时的映射关系
    const dirMap: Record<TPlacement, TPlacement> = {
      topLeft: 'bottomLeft',
      top: 'bottom',
      topRight: 'bottomRight',
      rightTop: 'leftTop',
      right: 'left',
      rightBottom: 'leftBottom',
      bottomRight: 'topRight',
      bottom: 'top',
      bottomLeft: 'topLeft',
      leftBottom: 'rightBottom',
      left: 'right',
      leftTop: 'rightTop',
    };

    const { top, bottom, left, right } = triggerRect;
    const { height, width } = contentRect;

    // top => bottom
    if (placement.includes('top')) {
      if (top < height) return setDir(dirMap[placement]);
      return setDir(placement);
    }

    // bottom => top
    if (placement.includes('bottom')) {
      if (bottom < height) return setDir(dirMap[placement]);
      return setDir(placement);
    }

    // left => right
    if (placement.includes('left')) {
      if (left < width) return setDir(dirMap[placement]);
      return setDir(placement);
    }

    // right => left
    if (placement.includes('right')) {
      if (right < width) return setDir(dirMap[placement]);
      return setDir(placement);
    }
  };

  const getPos = (): { arrow: CSSProperties; content: CSSProperties } => {
    const top_bottom = `calc(100% + ${offset}px)`;
    const left_right = `calc(100% + ${offset}px)`;

    const arrowHeight = arrowHeightMap[arrowSize];
    const arrowTop = {
      bottom: `calc(100% + ${offset - arrowHeight}px)`,
      left: 0,
      right: 0,
      margin: 'auto',
    };
    const arrowBottom = {
      top: `calc(100% + ${offset - arrowHeight}px)`,
      left: 0,
      right: 0,
      margin: 'auto',
    };

    const arrowLeft = {
      right: `calc(100% + ${offset - arrowHeight}px)`,
      top: 0,
      bottom: 0,
      margin: 'auto',
    };
    const arrowRight = {
      left: `calc(100% + ${offset - arrowHeight}px)`,
      top: 0,
      bottom: 0,
      margin: 'auto',
    };
    // content 圆角与 arrow 结合在一起在 leftTop/leftBottom/rightTop/rightBottom 可能会出现断开的情况，自行利用 margin 去处理
    switch (dir) {
      case 'topLeft':
        return {
          arrow: arrowTop,
          content: { bottom: top_bottom, left: 0 },
        };
      case 'topRight':
        return {
          arrow: arrowTop,
          content: { right: 0, bottom: top_bottom },
        };
      case 'top':
        return {
          arrow: arrowTop,
          content: {
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: top_bottom,
          },
        };
      case 'bottomLeft':
        return {
          arrow: arrowBottom,
          content: { left: 0, top: top_bottom },
        };
      case 'bottomRight':
        return {
          arrow: arrowBottom,
          content: { right: 0, top: top_bottom },
        };
      case 'bottom':
        return {
          arrow: arrowBottom,
          content: {
            left: '50%',
            transform: 'translateX(-50%)',
            top: top_bottom,
          },
        };
      case 'leftTop':
        return {
          arrow: arrowLeft,
          content: { right: left_right, top: 0 },
        };
      case 'leftBottom':
        return {
          arrow: arrowLeft,
          content: { right: left_right, bottom: 0 },
        };
      case 'left':
        return {
          arrow: arrowLeft,
          content: {
            right: left_right,
            top: '50%',
            transform: 'translateY(-50%)',
          },
        };

      case 'rightTop':
        return {
          arrow: arrowRight,
          content: { left: left_right, top: 0 },
        };
      case 'rightBottom':
        return {
          arrow: arrowRight,
          content: { left: left_right, bottom: 0 },
        };
      case 'right':
        return {
          arrow: arrowRight,
          content: {
            left: left_right,
            top: '50%',
            transform: 'translateY(-50%)',
          },
        };
    }
  };

  const getArrowDir = () => {
    if (dir.includes('left')) return 'left';
    if (dir.includes('right')) return 'right';
    if (dir.includes('top')) return 'top';
    if (dir.includes('bottom')) return 'bottom';
    return 'bottom';
  };

  const pos = getPos();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          {...(animateParams ? animateParams : opacity_scale)}
          className={cn('absolute inset-0 z-[1000] pointer-events-none')}
          onClick={allowClose ? () => onOpenChange(false) : undefined}
        >
          <div
            id={`popover_content_${id}`}
            className={cn(className, 'absolute z-[1001] pointer-events-auto')}
            style={{ ...style, ...pos.content }}
          >
            {children}
          </div>
          {showArrow && (
            <Arrow
              className={cn(
                // 默认为白色
                arrowCls ? arrowCls : 'text-text-white',
                'absolute z-[1002] pointer-events-auto',
              )}
              size={arrowSize}
              style={pos.arrow}
              placement={getArrowDir()}
              stroke={arrowBorderColor}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
