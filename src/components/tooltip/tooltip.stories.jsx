import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Tooltip',
  parameters: {
    notes: { markdown: readme },
  },
};

export const Tooltip = () => {
  const styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
  };

  const stylesElement = {
    'margin-top': '15px',
  };
  return (
    <div style={styles}>
      <bds-tooltip position="left-center" tooltip-text="Texto do tooltip">
        <bds-button>Hover me</bds-button>
      </bds-tooltip>
      <bds-tooltip style={stylesElement} position="left-center" tooltip-text="Texto do tooltip">
        <bds-icon name="user-default">Hover me</bds-icon>
      </bds-tooltip>
    </div>
  );
};
