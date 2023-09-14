import React from 'react';
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
    description: 'Escolha a cor do chip tag.',
    options: ['default', 'danger', 'info', 'outline', 'success', 'warning', 'disabled'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Escolha o ícone no componente.',
    control: 'text',
  },
};

Properties.args = {
  color: 'default',
  icon: '',
};
