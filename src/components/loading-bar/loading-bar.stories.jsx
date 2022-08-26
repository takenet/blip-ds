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

export const LoadingBar = () => {
  return (
    <div style={content}>
      <div style={alignContent}>
        <bds-loading-bar size="default" text="Texto para aplicar no componente" percent={48}></bds-loading-bar>
      </div>
    </div>
  );
};

export const LoadingBarSize = () => {
  return (
    <div style={content}>
      <div style={alignContent}>
        <bds-loading-bar size="small" text="Texto para aplicar no componente" percent={48}></bds-loading-bar>
        <bds-loading-bar size="default" text="Texto para aplicar no componente" percent={48}></bds-loading-bar>
      </div>
    </div>
  );
};
