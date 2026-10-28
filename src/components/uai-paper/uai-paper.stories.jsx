import React from 'react';
import DocumentationTemplate from './uai-paper.mdx';
import { UaiPaper } from '../../../blip-ds-react/dist/components';

// Sample dimensions built from UAI sizing tokens.
const PAPER_HEIGHT = 'var(--uai-sizing-5xl)';
const PAPER_WIDTH = 'calc(var(--uai-sizing-5xl) * 2)';

export default {
  title: 'UAI/Paper',
  component: UaiPaper,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => <UaiPaper {...args} />;

Properties.args = {
  border: false,
  elevation: 'primary',
  height: PAPER_HEIGHT,
  width: PAPER_WIDTH,
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
      defaultValue: { summary: PAPER_HEIGHT },
    },
    control: 'text',
  },
  width: {
    table: {
      defaultValue: { summary: PAPER_WIDTH },
    },
    control: 'text',
  },
}
