import React from 'react';
import DocumentationTemplate from './typo.mdx';
import { BdsTypo } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Typo',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-typo
      variant={args.variant}
      line-height={args.lineHeight}
      bold={args.bold}
      italic={args.italic}
      no-wrap={args.noWrap}
      paragraph={args.paragraph}
      margin={args.margin}
    >
      Texto para teste do typo.
    </bds-typo>
  );
};

Properties.args = {
  bold: 'regular',
  italic: false,
  lineHeight: '',
  margin: false,
  noWrap: false,
  paragraph: false,
  tag: 'p',
  variant: 'fs-16',
};

Properties.argTypes = {
  bold: {
    table: {
      defaultValue: { summary: 'regular' },
    },
    options: ['bold', 'extra-bold', 'regular', 'semi-bold'],
    control: 'select',
  },
  lineHeight: {
    table: {
      defaultValue: { summary: 'none' },
    },
    options: ['double', 'none', 'plus', 'simple', 'small'],
    control: 'select',
  },
  tag: {
    table: {
      defaultValue: { summary: 'p' },
    },
    options: ['h1', 'h2', 'h3', 'h4', 'p', 'span'],
    control: 'select',
  },
  variant: {
    table: {
      defaultValue: { summary: 'fs-16' },
    },
    options: ['fs-10', 'fs-12', 'fs-14', 'fs-16', 'fs-20', 'fs-24', 'fs-32', 'fs-40'],
    control: 'select',
  },
};

export const FrameworkReact = () => {
  return <BdsTypo>Texto para teste do typo.</BdsTypo>;
};
