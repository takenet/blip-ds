import React from 'react';
import readme from './readme.md';

export default {
  title: 'Loading',
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  width: '100vW',
  height: '100vH',
};

const contentDark = {
  width: '100vW',
  height: '100vH',
  background: '#0a0f1a',
};

const alignContent = {
  width: '100vW',
  height: '100vH',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
};

export const loadingExtraSmall = () => (
  <div style={content}>
    <div style={alignContent}>
      <bds-loading type="spinner" size="extra-small" color="main"></bds-loading>
    </div>
  </div>
);

export const loadingSmall = () => (
  <div style={content}>
    <div style={alignContent}>
      <bds-loading type="spinner" size="small" color="main"></bds-loading>
    </div>
  </div>
);

export const loadingStandard = () => (
  <div style={content}>
    <div style={alignContent}>
      <bds-loading type="spinner" size="standard" color="main"></bds-loading>
    </div>
  </div>
);

export const loadingPage = () => (
  <div style={contentDark}>
    <div style={alignContent}>
      <bds-loading type="page" size="standard" color="white"></bds-loading>
    </div>
  </div>
);
