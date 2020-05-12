import { configure, addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'Light', value: '#f5f8f9', default: true },
    { name: 'Suit', value: '#202c44', default: false },
    { name: 'Builder', value: '#283143', default: false },
    { name: 'Main', value: '#2cc3d5', default: false },
  ],
  options: {
    isToolshown: false,
  }
});

configure(require.context('../src/components', true, /\.stories\.jsx$/), module);
