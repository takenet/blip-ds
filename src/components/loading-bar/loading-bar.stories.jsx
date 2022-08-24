import React from 'react';
import readme from './readme.md';

export default {
  title: 'Loading Bar',
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  width: '100vW',
};

const alignContent = {
  maxWidth: '240px',
  margin: 'auto',
};

const Template = (args) => {
  return (
    <div style={content}>
      <div style={alignContent}>
        <bds-loading-bar
          size={args.size}
          text="Área de texto para aplicar no componente"
          percent="16"
        ></bds-loading-bar>
      </div>
    </div>
  );
};

export const LoadingBarDefault = Template.bind({});
LoadingBarDefault.args = { size: 'default' };

export const LoadingBarSmall = Template.bind({});
LoadingBarSmall.args = { size: 'small' };
