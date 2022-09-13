import React from 'react';

import readme from './readme.md';

export default {
  title: 'Grid',
  parameters: {
    notes: { markdown: readme },
  },
};

const paperSize = {
  width: '100%',
  padding: '24px'
};

export const containerGrid = () => (
  <bds-grid container>
    <bds-paper style={paperSize}>
      <bds-grid justify-content="center" xxs="12" padding="3">
        <bds-typo>Container</bds-typo>
      </bds-grid>
    </bds-paper>
  </bds-grid>
);

export const columnGrid = () => (
  <bds-grid container flex-wrap="wrap">

    <bds-grid xxs="7">
      <bds-paper style={paperSize}>
        <bds-typo>xxs</bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="4">
      <bds-paper style={paperSize}>
        <bds-typo>xs</bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="4">
      <bds-paper style={paperSize}>
        <bds-typo>xs</bds-typo>
      </bds-paper>
    </bds-grid>

    <bds-grid xxs="8">
      <bds-paper style={paperSize}>
        <bds-typo>xs</bds-typo>
      </bds-paper>
    </bds-grid>

  </bds-grid>
);
