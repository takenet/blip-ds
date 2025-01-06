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
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});