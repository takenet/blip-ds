import React from 'react';
import { defineCustomElements } from '../loader/index.js';
// https://github.com/storybookjs/storybook-addon-console/issues/86
//import { withConsole } from '@storybook/addon-console';
import './preview.css';
import 'blip-tokens/build/css/uai.css';
import 'blip-tokens/uai-icons/css';

// Load the custom elements
defineCustomElements();

// The Stencil React wrappers use the tag name as displayName, so "Show code" would print
// <uai-input>. Print the React component name (<UaiInput>) instead; host elements stay as they are.
const isTagName = (name) => /^[a-z][a-z0-9]*(-[a-z0-9]+)+$/.test(name);
const toPascalCase = (name) => name.replace(/(^|-)([a-z0-9])/g, (_match, _dash, char) => char.toUpperCase());
const jsxDisplayName = ({ type }) => {
  if (typeof type === 'string') return type;
  if (typeof type === 'symbol') return type.description || 'Fragment';
  const name = type.displayName || type.render?.displayName || type.type?.displayName || type.name || 'Component';
  return isTagName(name) ? toPascalCase(name) : name;
};

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
  //decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
  actions: { argTypesRegex: '^on[A-Z].*' },
  jsx: { displayName: jsxDisplayName },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ["Welcome", "Vamos Começar", "Integrações", "Tokens", "UAI", ["Foundation", ["Tokens", "Colors", "Typography", "Layout", "Motion", "Elevation", "Icons"], "*"], "Components", ["[deprecated] Navbar", "[deprecated] Button", "[deprecated] Icon", "[deprecated] Grid", "[deprecated] Paper", "[deprecated] Input", "[deprecated] Input Password", "NavTree", "*"], "Snippets", "Templates"]
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
    disabled: true,
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

    // Ensure components are fully loaded before rendering
    React.useEffect(() => {
      // Give components time to register after dependency upgrades
      const timer = setTimeout(() => {
        // Force a rerender to ensure event handlers are properly bound
        window.dispatchEvent(new CustomEvent('storybook-components-ready'));
      }, 100);
      return () => clearTimeout(timer);
    }, []);

    return (
      <bds-grid height="100%" direction="column">
        <bds-theme-provider theme={themeValue()}>
          <bds-grid style={(themeValue() === 'dark' ? {backgroundColor: '#292929', minHeight: '100%', width:'100%'} : {backgroundColor: '#f6f6f6', minHeight: '100%', width:'100%'})} justify-content="center">
            <bds-grid xxs="12" direction="column" padding="2" data-uai-theme={themeValue()} style={{minHeight: '300px', minWidth: '300px'}}>
              <Story {...context} />
            </bds-grid>
          </bds-grid>
        </bds-theme-provider>
      </bds-grid>
    );
  },
];
export const tags = ['autodocs'];
