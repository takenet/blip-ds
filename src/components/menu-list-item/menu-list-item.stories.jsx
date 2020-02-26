import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Menu List Item',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const menuListDefault = () => (
  <bds-menu-list-item
    color={text('color1', '#2CC3D5')}
    icon={text('icon1', 'user')}
  >
    Item 1
  </bds-menu-list-item>
);
