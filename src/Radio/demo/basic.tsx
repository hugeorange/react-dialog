import { RiSpotifyFill, RiSyringeFill, RiYoutubeFill } from '@remixicon/react';
import { Badge, Button, Radio } from '@rushable/align-ui';
import React from 'react';

export default function Basic() {
  return (
    <div className="flex flex-col gap-8">
      <RadioLabel />
      <hr className="my-4" />
      <RadioCard />
    </div>
  );
}

const radioArr = [
  {
    value: '123',
    children: '123',
    subLabel: '(Sublabel)',
    badge: (
      <Badge.Root color="blue" size="s">
        New
      </Badge.Root>
    ),
    desc: (
      <>
        <p className="mb-2">Insert the checkbox description here.</p>
        <Button.Link size="s">Link Button</Button.Link>
      </>
    ),
    leftIcon: <RiSpotifyFill size={40} className="text-green-500" />,
    desc_card: 'Insert the checkbox description here.',
  },
  {
    value: '456',
    children: '456',
    subLabel: '(Sublabel)',
    badge: (
      <Badge.Root color="blue" size="s">
        New
      </Badge.Root>
    ),
    desc: (
      <>
        <p className="mb-2">Insert the checkbox description here.</p>
        <Button.Link size="s">Link Button</Button.Link>
      </>
    ),
    leftIcon: <RiSyringeFill size={40} className="text-green-500" />,
    desc_card: 'Insert the checkbox description here.',
  },
];

const RadioLabel = () => {
  const [value1, setValue1] = React.useState('123');
  const [value2, setValue2] = React.useState('123');
  const [value3, setValue3] = React.useState('123');
  const [value4, setValue4] = React.useState('123');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-16">
        <Radio.Group
          className="w-[300px] flex flex-col gap-6"
          value={value1}
          onChange={(e) => setValue1(e)}
        >
          <>
            {radioArr.map((v) => (
              <Radio.Root
                key={v.value}
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
              >
                {v.children}
              </Radio.Root>
            ))}
            <Radio.Root
              value={'789'}
              subLabel={radioArr[0].subLabel}
              badge={radioArr[0].badge}
              disabled
            >
              789
            </Radio.Root>
          </>
        </Radio.Group>
        <Radio.Group
          className="w-[300px] flex flex-col gap-6"
          value={value2}
          onChange={(e) => setValue2(e)}
        >
          <>
            {radioArr.map((v) => (
              <Radio.Root
                key={v.value}
                isFlip
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
              >
                {v.children}
              </Radio.Root>
            ))}
            <Radio.Root
              isFlip
              value={'789'}
              subLabel={radioArr[0].subLabel}
              badge={radioArr[0].badge}
              disabled
            >
              789
            </Radio.Root>
          </>
        </Radio.Group>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-16">
        <Radio.Group
          className="w-[300px] flex flex-col gap-6"
          value={value3}
          onChange={(e) => setValue3(e)}
        >
          <>
            {radioArr.map((v) => (
              <Radio.Root
                key={v.value}
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
                desc={v.desc}
              >
                {v.children}
              </Radio.Root>
            ))}
            <Radio.Root
              value={'789'}
              subLabel={radioArr[0].subLabel}
              badge={radioArr[0].badge}
              desc={radioArr[0].desc}
              disabled
            >
              789
            </Radio.Root>
          </>
        </Radio.Group>
        <Radio.Group
          className="w-[300px] flex flex-col gap-6"
          value={value4}
          onChange={(e) => setValue4(e)}
        >
          <>
            {radioArr.map((v) => (
              <Radio.Root
                key={v.value}
                isFlip
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
                desc={v.desc}
              >
                {v.children}
              </Radio.Root>
            ))}
            <Radio.Root
              isFlip
              value={'789'}
              subLabel={radioArr[0].subLabel}
              badge={radioArr[0].badge}
              desc={radioArr[0].desc}
              disabled
            >
              789
            </Radio.Root>
          </>
        </Radio.Group>
      </div>
    </div>
  );
};

const RadioCard = () => {
  const [value1, setValue1] = React.useState('123');

  return (
    <Radio.Group
      className="flex flex-wrap flex-col gap-6 max-md:w-full w-[360px]"
      value={value1}
      onChange={(e) => setValue1(e)}
    >
      <>
        <Radio.Root
          value={'789'}
          type="card"
          subLabel={'subLabel'}
          badge={radioArr[0].badge}
          desc={'Insert the checkbox description here.'}
        >
          789
        </Radio.Root>
        {radioArr.map((v) => (
          <Radio.Root
            key={v.value}
            value={v.value}
            type="card"
            subLabel={v.subLabel}
            desc={v.desc_card}
            leftIcon={v.leftIcon}
          >
            {v.children}
          </Radio.Root>
        ))}

        <Radio.Root
          value={'789'}
          disabled
          type="card"
          subLabel={'subLabel'}
          badge={radioArr[0].badge}
          desc={'Insert the checkbox description here.'}
          leftIcon={<RiYoutubeFill size={40} className="text-red-500" />}
        >
          789
        </Radio.Root>
      </>
    </Radio.Group>
  );
};
