import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import readme from './readme.md';

export default {
  title: 'Menu List',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const menuListDefault = () => (
  <bds-menu-list>
    <bds-menu-list-item
      color={text('color1', '#2CC3D5')}
      icon={text('icon1', 'user')}
    >
      Item 1
    </bds-menu-list-item>
    <bds-menu-list-item
      color={text('color2', '#F66689')}
      icon={text('icon2', 'file-image')}
    >
      Item 2
    </bds-menu-list-item>
    <bds-menu-list-item
      color={text('color3', '#DB0707')}
      icon={text('icon3', 'file-image')}
    >
      Item 3
    </bds-menu-list-item>
  </bds-menu-list>
);
