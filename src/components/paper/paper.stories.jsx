import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Paper',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const container = {
  width: "100px",
  height: "150px",
  margin: "16px"
}

const content = {
  display: "flex",
  width: "100%",
}

export const defaultPapers = () => (
  <div style={content}>
    <div>
      <bds-typo>Static</bds-typo>
      <bds-paper style={container}></bds-paper>
    </div>
    <br />
    <div>
      <bds-typo>Primary</bds-typo>
      <bds-paper style={container} elevation="primary"></bds-paper>
    </div>
    <br />
    <div>
      <bds-typo>Secondary</bds-typo>
      <bds-paper style={container} elevation="secondary"></bds-paper>
    </div>
  </div>
);
