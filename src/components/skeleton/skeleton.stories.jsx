import React from 'react';
import DocumentationTemplate from './skeleton.mdx';
import { BdsGrid, BdsSkeleton } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Skeleton',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-grid xxs="12" direction="column" gap="2">
      <bds-skeleton shape={args.shape} width={args.width} height={args.height}></bds-skeleton>
      <bds-skeleton shape="square" width="100px" height="20px"></bds-skeleton>
      <bds-skeleton shape="square" width="300px" height="100px"></bds-skeleton>
      <bds-skeleton shape="square" width="300px" height="10px"></bds-skeleton>
    </bds-grid>
  );
};

Properties.args = {
  shape: 'circle',
  width: '50px',
  height: '50px',
};

Properties.argTypes = {
  shape: {
    table: {
      defaultValue: { summary: 'circle' },
    },
    options: ['circle', 'square'],
    control: 'select',
  },
  width: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  height: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
};

export const FrameworkReact = () => {
  return (
    <BdsGrid xxs="12" direction="column" gap="2">
      <BdsSkeleton shape="circle" width="50px" height="50px"></BdsSkeleton>
      <BdsSkeleton shape="square" width="100px" height="20px"></BdsSkeleton>
      <BdsSkeleton shape="square" width="300px" height="100px"></BdsSkeleton>
      <BdsSkeleton shape="square" width="300px" height="10px"></BdsSkeleton>
    </BdsGrid>
  );
};
