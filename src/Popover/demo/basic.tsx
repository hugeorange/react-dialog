import { RiCloseLine, RiUser6Line } from '@remixicon/react';
import { Button, Popover, Radio } from '@rushable/align-ui';
import { TPlacement } from '@rushable/align-ui/Popover';
import React, { Fragment, useState } from 'react';

type TDir = {
  dir: TPlacement;
  open: boolean;
};
export default () => {
  const [currType, setCurrType] = useState<'click' | 'hover'>('click');

  const [dirs, setDirs] = useState<TDir[]>([
    { dir: 'topLeft', open: false },
    { dir: 'top', open: false },
    { dir: 'topRight', open: false },

    { dir: 'leftTop', open: false },
    { dir: 'left', open: false },
    { dir: 'leftBottom', open: false },

    { dir: 'rightTop', open: false },
    { dir: 'right', open: false },
    { dir: 'rightBottom', open: false },

    { dir: 'bottomLeft', open: false },
    { dir: 'bottom', open: false },
    { dir: 'bottomRight', open: false },
  ]);

  const marginCls = {
    leftTop: 'mt-[-10px]',
    leftBottom: 'mb-[-10px]',
    rightTop: 'mt-[-10px]',
    rightBottom: 'mb-[-10px]',
  };

  const renderPopover = (d: TDir) => {
    return (
      <Popover.Root
        open={d.open}
        action={currType}
        onOpenChange={(open) => {
          const arr = dirs.map((v) => {
            if (v.dir === d.dir) {
              v.open = open;
            }
            return v;
          });

          setDirs([...arr]);
        }}
      >
        <Popover.Trigger>
          <Button.Root className="w-28" style="stroke">
            {d.dir}
          </Button.Root>
        </Popover.Trigger>

        <Popover.Content
          // 通过 margin 负值解决箭头旁边边框不连续的问题
          className={marginCls[d.dir as keyof typeof marginCls]}
          placement={d.dir as TPlacement}
          arrowCls="text-text-white"
          showArrow
        >
          {renderView(d)}
        </Popover.Content>
      </Popover.Root>
    );
  };

  const renderView = (d: TDir) => {
    return (
      <div className=" w-[320px] h-[240px] rounded-16 border border-stroke-soft bg-white shadow-md">
        <div className="p-5  border-b border-stroke-soft">
          <div className="flex justify-between">
            <div className="w-12 h-12 flex justify-center items-center rounded-full border border-stroke-soft">
              <RiUser6Line className="text-icon-sub" />
            </div>
            <RiCloseLine
              className="text-icon-sub cursor-pointer"
              onClick={() => {
                d.open = false;
                setDirs([...dirs]);
              }}
            />
          </div>
          <div className="mt-4 label-m">Insert Popover</div>
          <div className="mt-1 paragraph-s text-text-sub">
            Insert popover description here. It would look much better as three
            lines of text.
          </div>
        </div>
        <div className="px-5 py-4 flex justify-between items-center">
          <div className="paragraph-s text-text-sub">Step 1 of 4</div>
          <div className="flex gap-3">
            <Button.Root
              className="w-20"
              type="neutral"
              style="stroke"
              onClick={() => {
                d.open = false;
                setDirs([...dirs]);
              }}
            >
              Back
            </Button.Root>
            <Button.Root className="w-20" type="primary" style="filled">
              Next
            </Button.Root>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="m-auto flex flex-col gap-10 sm:w-[640px]">
      <Radio.Group
        className="flex gap-4 "
        value={currType}
        onChange={(e) => setCurrType(e as 'click' | 'hover')}
      >
        <Radio.Root value="click">click</Radio.Root>
        <Radio.Root value="hover">hover</Radio.Root>
      </Radio.Group>

      <div className=" flex justify-center gap-4">
        {[dirs[0], dirs[1], dirs[2]].map((d) => (
          <Fragment key={d.dir}>{renderPopover(d)}</Fragment>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          {[dirs[3], dirs[4], dirs[5]].map((d) => (
            <Fragment key={d.dir}>{renderPopover(d)}</Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {[dirs[6], dirs[7], dirs[8]].map((d) => (
            <Fragment key={d.dir}>{renderPopover(d)}</Fragment>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {[dirs[9], dirs[10], dirs[11]].map((d) => (
          <Fragment key={d.dir}>{renderPopover(d)}</Fragment>
        ))}
      </div>
    </div>
  );
};
