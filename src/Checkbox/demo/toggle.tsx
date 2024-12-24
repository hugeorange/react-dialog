import { RiSpotifyFill, RiSyringeFill, RiYoutubeFill } from '@remixicon/react';
import { Badge, Button, Checkbox } from '@rushable/align-ui';
import React from 'react';

export default function Basic() {
  return (
    <div className="flex flex-col gap-8">
      <CheckboxLabel />
      <hr className="my-4" />
      <CheckboxCard />
    </div>
  );
}

const CheckboxArr = [
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

const CheckboxLabel = () => {
  const [value1, setValue1] = React.useState<string[]>([]);
  const [value2, setValue2] = React.useState<string[]>([]);
  const [value3, setValue3] = React.useState<string[]>(['123']);
  const [value4, setValue4] = React.useState<string[]>(['123']);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-8">
        <Checkbox.Group
          className="w-[300px] flex flex-col gap-6"
          value={value1}
          onChange={(e) => setValue1(e)}
        >
          <>
            {CheckboxArr.map((v) => (
              <Checkbox.Root
                toggle
                key={v.value}
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
              >
                {v.children}
              </Checkbox.Root>
            ))}
            <Checkbox.Root
              toggle
              value={'789'}
              subLabel={CheckboxArr[0].subLabel}
              badge={CheckboxArr[0].badge}
              disabled
            >
              789
            </Checkbox.Root>
          </>
        </Checkbox.Group>
        <Checkbox.Group
          className="w-[300px] flex flex-col gap-6"
          value={value2}
          onChange={(e) => setValue2(e)}
        >
          <>
            {CheckboxArr.map((v) => (
              <Checkbox.Root
                toggle
                key={v.value}
                isFlip
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
              >
                {v.children}
              </Checkbox.Root>
            ))}
            <Checkbox.Root
              toggle
              isFlip
              value={'789'}
              subLabel={CheckboxArr[0].subLabel}
              badge={CheckboxArr[0].badge}
              disabled
            >
              789
            </Checkbox.Root>
          </>
        </Checkbox.Group>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-8">
        <Checkbox.Group
          className="w-[300px] flex flex-col gap-6"
          value={value3}
          onChange={(e) => setValue3(e)}
        >
          <>
            {CheckboxArr.map((v) => (
              <Checkbox.Root
                toggle
                key={v.value}
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
                desc={v.desc}
              >
                {v.children}
              </Checkbox.Root>
            ))}
            <Checkbox.Root
              toggle
              value={'789'}
              subLabel={CheckboxArr[0].subLabel}
              badge={CheckboxArr[0].badge}
              desc={CheckboxArr[0].desc}
              disabled
            >
              789
            </Checkbox.Root>
          </>
        </Checkbox.Group>
        <Checkbox.Group
          className="w-[300px] flex flex-col gap-6"
          value={value4}
          onChange={(e) => setValue4(e)}
        >
          <>
            {CheckboxArr.map((v) => (
              <Checkbox.Root
                toggle
                key={v.value}
                isFlip
                value={v.value}
                subLabel={v.subLabel}
                badge={v.badge}
                desc={v.desc}
              >
                {v.children}
              </Checkbox.Root>
            ))}
            <Checkbox.Root
              toggle
              isFlip
              value={'789'}
              subLabel={CheckboxArr[0].subLabel}
              badge={CheckboxArr[0].badge}
              desc={CheckboxArr[0].desc}
              disabled
            >
              789
            </Checkbox.Root>
          </>
        </Checkbox.Group>
      </div>
    </div>
  );
};

const CheckboxCard = () => {
  const [value1, setValue1] = React.useState<string[]>([]);

  return (
    <Checkbox.Group
      className="flex flex-col flex-wrap gap-6 max-md:w-full w-[360px]"
      value={value1}
      onChange={(e) => setValue1(e)}
    >
      <>
        {CheckboxArr.map((v) => (
          <Checkbox.Root
            toggle
            key={v.value}
            value={v.value}
            type="card"
            subLabel={v.subLabel}
            desc={v.desc_card}
            leftIcon={v.leftIcon}
          >
            {v.children}
          </Checkbox.Root>
        ))}

        <Checkbox.Root
          toggle
          value={'789'}
          disabled
          type="card"
          subLabel={'subLabel'}
          badge={CheckboxArr[0].badge}
          desc={'Insert the checkbox description here.'}
          leftIcon={<RiYoutubeFill size={40} className="text-red-500" />}
        >
          789
        </Checkbox.Root>
      </>
    </Checkbox.Group>
  );
};
