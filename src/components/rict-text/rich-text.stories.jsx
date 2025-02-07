import React from 'react';
import DocumentationTemplate from './rich-text.mdx';
import { BdsBadge } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/RichText',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-badge
    shape={args.shape}
    color={args.color}
    icon={args.icon}
    number={args.number ? args.number : null}
    animation={args.animation}
  ></bds-badge>
);
Properties.argTypes = {
  shape: {
    table: {
      defaultValue: { summary: 'circle' },
    },

    options: ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  color: {
    table: {
      defaultValue: { summary: 'system' },
    },
    options: ['system', 'danger', 'warning', 'success', 'neutral'],
    control: 'select',
  },
  animation: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  number: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'number',
  },
};

Properties.args = {
  shape: 'circle',
  color: 'system',
  icon: 'info',
  animation: false,
  number: null,
};

export const FrameworkReact = () => <BdsBadge animation={true} shape="circle" color="system" icon="info"></BdsBadge>;
