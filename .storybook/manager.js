import { addons } from '@storybook/manager-api';
import YourTheme from './YourTheme';

addons.setConfig({
  theme: YourTheme,
  panelPosition: 'bottom',
  bottomPanelHeight: 600,
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: 'undefined',
  initialActive: 'sidebar',
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  layoutCustomisations: {
    showSidebar: true, // Force sidebar to be always visible
  },
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
    renderLabel: (item) => item.name,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    'storybook/background': { hidden: false },
    'storybook/viewport': { hidden: false },
  },
});