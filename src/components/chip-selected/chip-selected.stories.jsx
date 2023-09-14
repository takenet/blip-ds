import React from 'react';
import DocumentationTemplate from './chip-selected.mdx';

export default {
  title: 'Components/Chip Selected',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-chip-selected color={args.color} icon={args.icon} selected={args.selected} disabled={args.disabled} size={args.size}>
    Chip-selected Default
  </bds-chip-selected>
);

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'default' },
    },
    description: 'Escolha a cor do chip clickable.',
    options: ['default', 'danger', 'info', 'outline', 'success', 'warning'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Escolha o ícone no componente.',
    control: 'text',
  },
  selected: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o componente será iniciado selecionado.',
    control: 'boolean',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o componente está desabilitado.',
    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'standard' },
    },
    description: 'Escolha a cor do chip tag.',
    options: ['standard', 'tall'],
    control: 'select',
  },
};

Properties.args = {
  color: 'default',
  icon: '',
  selected: false,
  disabled: false,
  size:'tall'
};