import React from 'react';
import DocumentationTemplate from './loading-bar.mdx';
import { BdsLoadingBar } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Loading Bar',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '500px';
  }
  return (
        <bds-loading-bar size={args.size} percent={args.percent}></bds-loading-bar>
  );
};

Properties.args = {
  size: 'default',
  percent: 48,
};

Properties.argTypes = {
  size: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    options: ['small', 'default'],
    control: 'select',
  },
  percent: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'number',
  },
}

export const FrameworkReact = () => {
  return (
        <BdsLoadingBar size="default" percent={48}></BdsLoadingBar>
  );
};