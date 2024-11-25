import { useEffect } from 'react';
import { BdsDivider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './divider.mdx';

export default {
  title: 'Components/Divider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '300px';
    el[0].style.position = 'relative';
    el[0].style.background = 'none';
  }
  return (
    <bds-divider 
      style-type={args.styleType} 
      orientation={args.orientation} 
      color={args.color}
    />
  );
};

Properties.argTypes = {
  styleType: {
    table: {
      defaultValue: { summary: 'solid' },
    },
    description: 'Define o estilo da linha do divider.',
    options: ['solid', 'dotted', 'dashed'],
    control: { type: 'select' },
  },
  orientation: {
    table: {
      defaultValue: { summary: 'horizontal' },
    },
    description: 'Define a orientação do divider.',
    options: ['horizontal', 'vertical'],
    control: { type: 'select' },
  },
  color: {
    table: {
      defaultValue: { summary: 'divider-1' },
    },
    description: 'Define a cor da linha do divider.',
    options: ['divider-1', 'divider-2', 'divider-3'],
    control: { type: 'select' },
  },
};

Properties.args = {
  styleType: 'solid',
  orientation: 'horizontal',
  color: 'divider-1',
};

export const FrameworkReact = () => {
  return (
    <BdsDivider 
      styleType="solid" 
      orientation="horizontal" 
      color="divider-1" 
    ></BdsDivider>
  );
};
