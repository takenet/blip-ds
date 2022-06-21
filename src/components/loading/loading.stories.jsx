import React from 'react';
import readme from './readme.md';

export default {
  title: 'Loading',
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

const alignContent = {
  display: 'flex',
  alignContent: 'center',
  height: '94vh',
  justifyContent: 'center',
  alignItems: 'center',
};

const alignType = {
  display: 'flex',
  width: '100%',
  height: '94vh',
  flexDirection: 'row',
  flexWrap: 'no-wrap'
}

const alignInside = {
  display: 'flex',
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}

const alignPage = {
  display: 'flex',
  width: '50%',
  justifyContent: 'center',
  background: '#0a0f1a',
  alignItems: 'center',
}
export const loadingDefault = () => (
  <div style={alignSize}>
    <bds-loading type="spinner" size="standard" color="main"></bds-loading>
  </div>
);

export const loadingSize = () => (
    <div style={alignSize}>
      <bds-loading type="spinner" size="extra-small" color="main"></bds-loading>
      <bds-loading type="spinner" size="small" color="main"></bds-loading>
      <bds-loading type="spinner" size="standard" color="main"></bds-loading>
    </div>
);

export const loadingColor = () => (
    <div style={alignSize}>
        <bds-loading type="spinner" size="small" color="main"></bds-loading>
      <bds-paper style={contentDark}>
        <bds-loading type="spinner" size="small" color="light"></bds-loading>
      </bds-paper>
      
    </div>
);

export const loadingType = () => (
    <div style={alignType}>
      <div style={alignInside}>
        <bds-loading type="spinner" size="standard" color="main"></bds-loading>
      </div>
      <div style={alignPage}>
        <bds-loading type="page" size="standard" color="light"></bds-loading>
      </div>
      
    </div>
);

