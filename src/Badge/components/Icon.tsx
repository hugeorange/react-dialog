import { cloneElement, ReactElement, useContext } from 'react';
import { BadgeCtx } from './Badge';

type TIconProps = {
  className?: string;
  as: ReactElement;
};
export default function Icon({ className, as }: TIconProps) {
  const size = useContext(BadgeCtx).size;
  return cloneElement(as, {
    className,
    size: as.props.size || size === 's' ? 12 : 16,
  });
}
