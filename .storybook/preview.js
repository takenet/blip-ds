import { defineCustomElements } from '../dist/esm/loader';
import { withConsole } from '@storybook/addon-console';
import { useEffect, useState } from 'react';
import './preview.css';

defineCustomElements();

export const globalTypes = {
  hasTheme: {
    name: 'Theme',
    description: 'Defina o tema que o componente será aplicado',
    defaultValue: 'on',
    toolbar: {
      icon: 'paintbrush',
      items: ['on', 'off'],
    },
  },
};
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
  layout: 'centered',
  backgrounds: {
    disable: true,
  },
};

export const decorators = [
  (Story, context) => {
    const {hasTheme} = context.globals;
    const [theme, setTheme] = useState('light');
    const colors = {
      light: { backgroundColor: '#ffffff', height: '100%', width: '100%' },
      dark: { backgroundColor: '#292929', height: '100%', width: '100%' },
    };
    const display = {
      on: {display: 'flex'},
      off: {display: 'none'},
    }
    const [bg, setBg] = useState(colors.light);

    const handleTheme = () => {
      if(hasTheme == 'on') {
      return display.on;
    } else if(hasTheme == 'off') {
      return display.off;
    }
    }

    useEffect(() => {
      
      const select = document.getElementById('themes');
      select.addEventListener('bdsChange', (obj) => {
        const color = obj.detail.value;
        if (color == 'light') {
          setTheme('light');
          setBg(colors.light);
        } else if (color == 'dark') {
          setTheme('dark');
          setBg(colors.dark);
        }
      });
    });

    return (
      <bds-grid height="100%" direction='column'>
        <bds-grid class="open-functions" style={handleTheme()} gap="2">
          <bds-icon name="menu-dot"></bds-icon>
          <bds-select placeholder="Escolha o tema" id="themes" onChange={(event) => handleBg(event)}>
            <bds-select-option value="light">Light</bds-select-option>
            <bds-select-option value="dark">Dark</bds-select-option>
          </bds-select>
        </bds-grid>

        <bds-theme-provider theme={theme}>
          <bds-grid direction="column" padding="2" align-items="center" justify-content="center" style={bg}>
            <bds-grid height="64px"></bds-grid>
            <Story {...context} />
          </bds-grid>
        </bds-theme-provider>
      </bds-grid>
    );
  },
];
