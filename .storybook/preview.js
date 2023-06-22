import { defineCustomElements } from '../dist/esm/loader';
import { withConsole } from '@storybook/addon-console';
defineCustomElements();


export const parameters = {
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
