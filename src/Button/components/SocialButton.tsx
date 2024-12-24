import React, { CSSProperties, isValidElement } from 'react';
import cn from '../../utils/cn';
import Button, { TButtonProps } from './Button';
import Icon from './Icon';

type TIconButtonProps = Omit<
  TButtonProps,
  'iconLeft' | 'iconRight' | 'type' | 'size' | 'style' | 'loading' | 'htmlType'
> & {
  style: 'filled' | 'stroke';
  bgColor?: string; // 仅 filled 时有效
};
export default function SocialButton(props: TIconButtonProps) {
  const { className, bgColor, style, children, ...rest } = props;

  const onlyIcon = isValidElement(children) && children.type === Icon;

  const type = style === 'stroke' ? 'neutral' : 'social';

  const hoverBgColor = {
    '--bgColor': bgColor,
    background: style === 'filled' ? bgColor : '',
  } as CSSProperties;

  const hoverStyle = style === 'filled' ? hoverBgColor : undefined;

  return (
    <Button
      className={cn(className, { 'pr-4': !onlyIcon })}
      htmlStyle={hoverStyle}
      size="m"
      htmlType="button"
      type={type}
      style={style}
      {...rest}
    >
      {children}
    </Button>
  );
}
