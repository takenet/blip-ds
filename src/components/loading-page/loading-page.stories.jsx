import React from 'react';
import readme from './readme.md';

export default {
  title: 'Loading page',
  parameters: {
    notes: { markdown: readme },
  },
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
    <bds-loading-page></bds-loading-page>
  </div>
);

