import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Banner',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const content = {
  display: "flex",
  width: "90vw",
}

export const defaultBanner = () => (
  <div style={content}>
    <bds-banner>Banner Text</bds-banner>
  </div>
);

export const bannerWithIcon = () => (
  <div style={content}>
    <bds-banner>
      <bds-icon name="email"></bds-icon> Banner Text
    </bds-banner>
  </div>
);

export const bannerNotClose = () => (
  <div style={content}>
    <bds-banner fixed>
      Banner Text
    </bds-banner>
  </div>
);