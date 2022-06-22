import React from 'react';
import readme from './readme.md';

export default {
  title: 'Loading spinner',
  parameters: {
    notes: { markdown: readme },
  },
};

const contentDark = {
  background: '#0747a6',
  padding: '16px'
};

const alignSize = {
  display: 'flex',
  gap: '16px',
  height: '94vh',
  alignItems: 'center',
  justifyContent: 'center'
}
export const loadingDefault = () => (
  <div style={alignSize}>
    <bds-loading-spinner size="standard" color="main"></bds-loading-spinner>
  </div>
);

export const loadingSize = () => (
    <div style={alignSize}>
      <bds-loading-spinner size="extra-small" color="main"></bds-loading-spinner>
      <bds-loading-spinner size="small" color="main"></bds-loading-spinner>
      <bds-loading-spinner size="standard" color="main"></bds-loading-spinner>
    </div>
);

export const loadingColor = () => (
    <div style={alignSize}>
        <bds-loading-spinner size="small" color="main"></bds-loading-spinner>
      <bds-paper style={contentDark}>
        <bds-loading-spinner size="small" color="light"></bds-loading-spinner>
      </bds-paper>
      
    </div>
);

