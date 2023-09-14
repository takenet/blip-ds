import { defineCustomElements } from '../dist/esm/loader';
import { withConsole } from '@storybook/addon-console';
import './preview.css';

defineCustomElements();

export const globalTypes = {
  hasTheme: {
    name: 'Theme',
    description: 'Defina o tema que o componente será aplicado',
    defaultValue: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#292929' },
    ],
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark'],
    },
  },
};
export const parameters = {
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ["Getting Started", "Tokens", "Components"]
    }
  },
  controls: {
    expanded: false,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    disable: true,
  },
};

export const decorators = [
  (Story, context) => {
    const { hasTheme } = context.globals;

    const themeValue = () => {
      if (hasTheme == 'light') {
        return 'light';
      } else if (hasTheme == 'dark') {
        return 'dark';
      }
    }

    return (
      <bds-grid height="100%" direction="column">
        <bds-theme-provider theme={themeValue()}>
          <bds-grid style={(themeValue() === 'dark' ? {backgroundColor: '#292929', height: '100%', width:'100%'} : {backgroundColor: '#ffffff', height: '100%', width:'100%'})} justify-content="center">
            <bds-grid xxs="12" direction="column" padding="2">
              <Story {...context} />
            </bds-grid>
          </bds-grid>
        </bds-theme-provider>
      </bds-grid>
    );
  },
];
