import React from 'react';
import readme from './readme.md';

export default {
  title: 'Progress Bar',
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  width: '100vW',
};

const alignContent = {
  maxWidth: '320px',
  margin: 'auto',
};

const Template = (args) => {
  return (
    <div style={content}>
      <div style={alignContent}>
        <bds-progress-bar
          size={args.size}
          color={args.color}
          text="Texto para aplicar no componente"
          percent={16}
        ></bds-progress-bar>
      </div>
    </div>
  );
};

export const ProgressBarDefault = Template.bind({});
ProgressBarDefault.args = { size: 'default' };

export const ProgressBarPositive = Template.bind({});
ProgressBarPositive.args = { color: 'positive' };

export const ProgressBarInformation = Template.bind({});
ProgressBarInformation.args = { color: 'information' };

export const ProgressBarWarning = Template.bind({});
ProgressBarWarning.args = { color: 'warning' };

export const ProgressBarSmall = Template.bind({});
ProgressBarSmall.args = { size: 'small' };
