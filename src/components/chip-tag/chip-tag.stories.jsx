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
  <bds-chip-tag color={args.color} icon={args.icon} data-test={args.dataTest}>
    Chip-tag Default
  </bds-chip-tag>
);

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'default' },
    },
    description: 'Define a cor do chip.',
    options: ['default', 'danger', 'info', 'outline', 'success', 'warning', 'disabled'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o ícone do chip.',
    control: 'text',
  },
  dataTest: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o id para testes externos. (Sem alteração visual).',
    control: 'text',
  },
};

Properties.args = {
  color: 'default',
  icon: '',
  dataTest: '',
};

export const FrameworkReact = () => (
  <BdsChipTag color="default" icon="" dataTest="">
    Chip-tag Default
  </BdsChipTag>
);
