import React from 'react';
import DocumentationTemplate from './progress-bar.mdx';
import { BdsProgressBar } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Progress Bar',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
        <bds-progress-bar size={args.size} text={args.text} percent={args.percent} color={args.color}></bds-progress-bar>
  );
};

Properties.args = {
  color: 'default',
  percent: 16,
  size: 'default',
  text: 'Texto para aplicar no componente',
};

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: ["default", "information", "positive", "warning"],
    control: 'select',
  },
  percent: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'number',
  },
  size: {
    table: {
      defaultValue: { summary: 'default' },
    },
    options: ["default", "small"],
    control: 'select',
  },
  text: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
}

export const FrameworkReact = () => {
  return (
        <BdsProgressBar size="default" text="Texto para aplicar no componente" percent={16}></BdsProgressBar>
  );
};
