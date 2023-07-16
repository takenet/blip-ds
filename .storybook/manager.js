import { addons } from '@storybook/manager-api';

addons.setConfig({
  isFullscreen: false,
  showNav: false,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: false,
  theme: undefined,
  selectedPanel: 'actions',
  initialActive: 'canvas',
  sidebar: {
    showRoots: false,
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