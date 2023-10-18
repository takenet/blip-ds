import { addons } from '@storybook/manager-api';
import YourTheme from './YourTheme';

addons.setConfig({
  theme: YourTheme,
  isFullscreen: false,
  showNav: false,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: false,
  selectedPanel: 'panel',
  initialActive: 'canvas',
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