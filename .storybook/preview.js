import { defineCustomElements } from '../dist/esm/loader';
import { withConsole } from '@storybook/addon-console';
defineCustomElements();

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Defina o tema que o componente será aplicado',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark'],
    }
  }
}
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
    disable: true
  },
};

export const decorators = [
  (Story, context) => {
    const {theme} = context.globals;
    const colors = {
      light: {backgroundColor: '#ffffff', height: '100%', width: '100%'},
      dark: {backgroundColor: '#292929', height: '100%', width: '100%'},
    }
    const handleBg = () => {
      if(theme == 'light') {
      return colors.light
    } else if(theme== 'dark') {
      return colors.dark;
    }
    }
      
    return (
      <bds-theme-provider theme={theme}>
        <bds-grid padding="2" style={handleBg()} >
          <Story {...context} />
        </bds-grid>
      </bds-theme-provider>
    )
  }
]