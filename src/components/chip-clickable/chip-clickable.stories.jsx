import React from 'react';
import DocumentationTemplate from './chip-clickable.mdx';
import { BdsChipClickable } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Chip Clickable',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-chip-clickable color={args.color} icon={args.icon} avatar={args.avatar} clickable={args.clickable} close={args.close} disabled={args.disabled} size={args.size}>
    Chip-clickable Default
  </bds-chip-clickable>
);

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: ['default', 'danger', 'info', 'outline', 'success', 'warning'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  avatar: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  clickable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  close: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'standard' },
    },
    options: ['standard', 'tall'],
    control: 'select',
  },
};

Properties.args = {
  color: 'default',
  icon: '',
  avatar: '',
  clickable: false,
  close: false,
  disabled: false,
  size:'tall'
};

export const Events = () => (
  <bds-chip-clickable color="default" icon="" avatar="" clickable={false} close={false} disabled={false} size="tall">
    Chip-clickable Default
  </bds-chip-clickable>
);

export const FrameworkReact = () => (
  <BdsChipClickable color="default" icon="" avatar="" clickable={false} close={false} disabled={false} size="tall">
    Chip-clickable Default
  </BdsChipClickable>
);
