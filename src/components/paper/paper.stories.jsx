import React from 'react';
import DocumentationTemplate from './paper.mdx';
import { BdsPaper } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Paper',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
      <bds-paper border={args.border} elevation={args.elevation} height={args.height} width={args.width}></bds-paper>
);
} 

Properties.args = {
  border: false,
  elevation: 'primary',
  height: '100px',
  width: '150px',
};

Properties.argTypes = {
  border: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  elevation: {
    table: {
      defaultValue: { summary: 'primary' },
    },
    options: ["primary", "secondary", "static", "none"],
    control: 'select',
  },
  height: {
    table: {
      defaultValue: { summary: '100px' },
    },
    control: 'text',
  },
  width: {
    table: {
      defaultValue: { summary: '150px' },
    },
    control: 'text',
  },
}

export const FrameworkReact = () => {
  return (
      <BdsPaper border={false} elevation="primary" height="100px" width="150px"></BdsPaper>
);
} 