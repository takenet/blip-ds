import React from 'react';
import DocumentationTemplate from './loading-spinner.mdx';
import { BdsLoadingSpinner } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Loading spinner',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '200px';
    el[0].style.textAlign = 'center';
  }
  return (
    <bds-loading-spinner size={args.size} color={args.color}></bds-loading-spinner>
  )
}

Properties.args = {
  color: 'main',
  size: 'standard',
};

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    options: ['light', 'main'],
    control: 'select',
  },
  size: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
   
    options: ["extra-small", "small", "standard"],
    control: 'select',
  },
}
    
export const FrameworkReact = () => (
    <BdsLoadingSpinner size="standard" color="main"></BdsLoadingSpinner>
);


