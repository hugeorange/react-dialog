import {
  RiAppleFill,
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from '@remixicon/react';
import { Button } from '@rushable/align-ui';
import React from 'react';

export default function BasicDemo() {
  const bgColor = ['#000', '#000', '#F14336', '#1977F3', '#0077B5', '#24292F'];

  const brand = [
    <RiAppleFill key="RiAppleFill" />,
    <RiTwitterXFill key="RiTwitterXFill" />,
    <RiGoogleFill key="RiGoogleFill" />,
    <RiFacebookFill key="RiFacebookFill" />,
    <RiLinkedinBoxFill key="RiLinkedinBoxFill" />,
    <RiGithubFill key="RiGithubFill" />,
  ];
  return (
    <div className="py-4">
      {bgColor.map((v, idx) => (
        <div className="flex gap-6 py-4 flex-wrap" key={idx}>
          <Button.Social
            onClick={() => alert('Login with Brand')}
            bgColor={v}
            style="filled"
          >
            <Button.Icon as={brand[idx]} />
            Login with Brand
          </Button.Social>
          <Button.Social bgColor={v} style="filled">
            <Button.Icon as={brand[idx]} />
          </Button.Social>

          <Button.Social style="stroke">
            <Button.Icon as={brand[idx]} />
            Login with Brand
          </Button.Social>

          <Button.Social style="stroke">
            <Button.Icon as={brand[idx]} />
          </Button.Social>
        </div>
      ))}
    </div>
  );
}
