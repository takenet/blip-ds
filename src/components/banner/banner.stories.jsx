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
    <bds-banner variant="system">Banner Text</bds-banner>
  </div>
);

export const bannerWarning = () => (
  <div style={content}>
    <bds-banner variant="warning" fixed>
      Banner Text
    </bds-banner>
  </div>
);
