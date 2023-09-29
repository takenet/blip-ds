import React from 'react';
import { BdsChipTag } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './chip-tag.mdx';

export default {
  title: 'Components/Chip Tag',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-chip-tag color={args.color} icon={args.icon}>
    Chip-tag Default
  </bds-chip-tag>
);

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: ['default', 'danger', 'info', 'outline', 'success', 'warning', 'disabled'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
};

Properties.args = {
  color: 'default',
  icon: '',
};

export const FrameworkReact = () => (
  <BdsChipTag color="default" icon="">
    Chip-tag Default
  </BdsChipTag>
);
