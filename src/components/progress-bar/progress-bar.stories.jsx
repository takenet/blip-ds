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

export const ProgressBar = () => {
  return (
    <div style={content}>
      <div style={alignContent}>
        <bds-progress-bar size="default" text="Texto para aplicar no componente" percent={16}></bds-progress-bar>
      </div>
    </div>
  );
};

export const ProgressBarSize = () => {
  return (
    <div style={content}>
      <div style={alignContent}>
        <bds-progress-bar size="small" text="Texto para aplicar no componente" percent={16}></bds-progress-bar>
        <bds-progress-bar size="default" text="Texto para aplicar no componente" percent={16}></bds-progress-bar>
      </div>
    </div>
  );
};

export const ProgressBarColor = () => {
  return (
    <div style={content}>
      <div style={alignContent}>
        <bds-progress-bar color="default" text="Texto para aplicar no componente" percent={16}></bds-progress-bar>
        <bds-progress-bar color="information" text="Texto para aplicar no componente" percent={16}></bds-progress-bar>
        <bds-progress-bar color="warning" text="Texto para aplicar no componente" percent={16}></bds-progress-bar>
        <bds-progress-bar color="positive " text="Texto para aplicar no componente" percent={16}></bds-progress-bar>
      </div>
    </div>
  );
};
