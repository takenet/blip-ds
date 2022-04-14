import React from 'react';
import { withKnobs, text, number } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Progress Bar',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  width: "100vW"
}

const alignContent = {
  maxWidth: "240px",
  margin: "auto",
}

export const progressBar = () => (
  <div style={content}>
    <div style={alignContent}>
      <bds-progress-bar text={text('text', '')} percent={number('percent', 16)}></bds-progress-bar>
    </div>
</div>
);