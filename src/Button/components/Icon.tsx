import { cloneElement, ReactElement, useContext } from 'react';
import { GroupCtx } from './Group';
import { LinkButtonCtx } from './LinkButton';

type TIconProps = {
  className?: string;
  as: ReactElement;
};
export default function Icon({ className, as }: TIconProps) {
  const linkSize = useContext(LinkButtonCtx)?.size;
  const groupSize = useContext(GroupCtx)?.size;

  let size = 20;
  if (linkSize) {
    size = linkSize === 'm' ? 20 : 16;
  }

  if (groupSize) {
    size = groupSize === 's' ? 20 : 16;
  }

  return cloneElement(as, {
    className,
    size: as.props.size || size,
  });
}
