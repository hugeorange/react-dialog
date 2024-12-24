import React, { createContext, ReactElement, ReactNode } from 'react';
import cn from '../../utils/cn';
import Dot from './Dot';
import Icon from './Icon';

export const BadgeCtx = createContext<{ size: TBadgeProps['size'] }>({
  size: 'm',
});

export type TBadgeColor =
  | 'gray'
  | 'blue'
  | 'orange'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'sky'
  | 'pink'
  | 'teal';

export type TBadgeStyle = 'filled' | 'light' | 'lighter' | 'stroke';

export type TBadgeProps = {
  className?: string;
  style?: TBadgeStyle;
  color: TBadgeColor;
  size?: 'm' | 's';
  isNumber?: boolean;
  disabled?: boolean;
  children: ReactNode | ReactNode[];
};
export default function CoreBadge({
  className,
  style = 'filled',
  color = 'gray',
  size = 'm',
  isNumber = false,
  disabled = false,
  children,
}: TBadgeProps) {
  const fontSizeCls = cn({
    'h-4 subheading-2xs': size === 's',
    'h-5 label-xs': size === 'm',
  });
  const disabledCls = 'border border-stoke-soft bg-white text-text-disabled';

  const paddingCls = () => {
    if (!Array.isArray(children)) return 'px-2';
    const first = children[0] as ReactElement;
    if (first.type === Dot) {
      return cn('pr-2', { 'pl-0.5': size === 'm' });
    }
    const last = children[children.length - 1] as ReactElement;
    if (first.type === Icon && last.type === Icon) {
      return 'px-1';
    }
    if (first.type === Icon) {
      return 'pl-1 pr-2';
    }
    if (last.type === Icon) {
      return 'pl-2 pr-1';
    }
    return '';
  };

  const colorArr = getColor(style, color);

  if (isNumber) {
    return (
      <div
        className={cn(
          className,
          'flex justify-center items-center rounded-full',
          fontSizeCls,
          disabled ? disabledCls : colorArr,
          {
            'w-4 h-4': size === 's',
            'w-5 h-5': size === 'm',
          },
        )}
      >
        {children}
      </div>
    );
  }
  return (
    <BadgeCtx.Provider value={{ size }}>
      <div
        className={cn(
          className,
          'flex items-center rounded-full',
          fontSizeCls,
          paddingCls(),
          disabled ? disabledCls : colorArr,
        )}
      >
        {children}
      </div>
    </BadgeCtx.Provider>
  );
}

function getColor(style: TBadgeProps['style'], color: TBadgeProps['color']) {
  if (style === 'filled') {
    const colorMap = {
      gray: 'bg-faded-base border-faded-base',
      blue: 'bg-information-base border-information-base',
      orange: 'bg-warning-base border-warning-base',
      red: 'bg-error-base border-error-base',
      green: 'bg-success-base border-success-base',
      yellow: 'bg-away-base border-away-base',
      purple: 'bg-feature-base border-feature-base',
      sky: 'bg-verified-base border-verified-base',
      pink: 'bg-highlighted-base border-highlighted-base',
      teal: 'bg-stable-base border-stable-base',
    };
    return ['border', 'text-static-white', colorMap[color]];
  }

  if (style === 'light') {
    const colorMap = {
      gray: 'bg-faded-light border-faded-light text-faded-dark',
      blue: 'bg-information-light border-information-light text-information-dark',
      orange: 'bg-warning-light border-warning-light text-warning-dark',
      red: 'bg-error-light border-error-light text-error-dark',
      green: 'bg-success-light border-success-light text-success-dark',
      yellow: 'bg-away-light border-away-light text-away-dark',
      purple: 'bg-feature-light border-feature-light text-feature-dark',
      sky: 'bg-verified-light border-verified-light text-verified-dark',
      pink: 'bg-highlighted-light border-highlighted-light text-highlighted-dark',
      teal: 'bg-stable-light border-stable-light text-stable-dark',
    };
    return ['border', colorMap[color]];
  }

  if (style === 'lighter') {
    const colorMap = {
      gray: 'bg-faded-lighter border-faded-lighter text-faded-base',
      blue: 'bg-information-lighter border-information-lighter text-information-base',
      orange: 'bg-warning-lighter border-warning-lighter text-warning-base',
      red: 'bg-error-lighter border-error-lighter text-error-base',
      green: 'bg-success-lighter border-success-lighter text-success-base',
      yellow: 'bg-away-lighter border-away-lighter text-away-base',
      purple: 'bg-feature-lighter border-feature-lighter text-feature-base',
      sky: 'bg-verified-lighter border-verified-lighter text-verified-base',
      pink: 'bg-highlighted-lighter border-highlighted-lighter text-highlighted-base',
      teal: 'bg-stable-lighter border-stable-lighter text-stable-base',
    };
    return ['border', colorMap[color]];
  }

  if (style === 'stroke') {
    const colorMap = {
      gray: 'border-faded-base text-faded-base',
      blue: 'border-information-base text-information-base',
      orange: 'border-warning-base text-warning-base',
      red: 'border-error-base text-error-base',
      green: 'border-success-base text-success-base',
      yellow: 'border-away-base text-away-base',
      purple: 'border-feature-base text-feature-base',
      sky: 'border-verified-base text-verified-base',
      pink: 'border-highlighted-base text-highlighted-base',
      teal: 'border-stable-base text-stable-base',
    };
    return ['border', 'bg-bg-white', colorMap[color]];
  }
  return [];
}
