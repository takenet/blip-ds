import React from 'react';
import readme from './readme.md';

export default {
  title: 'NavBar Live Code',
  parameters: {
    notes: { markdown: readme },
  },
};

export const NavbarDocs = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '720px';
  }

  return (
    <bds-navbar
      orientation={args.orientation}
      justify-content={args.justifyContent}
      background-color={args.backgroundColor}
    >
      <bds-navbar-content>
        <bds-button-icon size="short" variant="secondary" icon="home"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="store"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="team"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="cloud"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="integration"></bds-button-icon>
      </bds-navbar-content>
      <bds-navbar-content>
        <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
        <bds-avatar name="Dwight Schrute" size="small"></bds-avatar>
      </bds-navbar-content>
    </bds-navbar>
  );
};

NavbarDocs.argTypes = {
  orientation: {
    table: {
      defaultValue: { summary: 'horizontal' },
    },
    description: 'Coloque a disposição da navegação.',
    control: 'select',
    options: ['horizontal', 'vertical'],
  },
  justifyContent: {
    table: {
      defaultValue: { summary: 'space-between' },
    },
    description: 'Coloque a cor de fundo da navegação.',
    control: 'select',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'],
  },
  backgroundColor: {
    table: {
      defaultValue: { summary: 'surface-1' },
    },
    description: 'Coloque a cor de fundo da navegação.',
    control: 'select',
    options: ['surface-1', 'surface-2', 'surface-3'],
  },
};

NavbarDocs.args = {
  orientation: 'horizontal',
  justifyContent: 'space-between',
  backgroundColor: 'surface-1',
};
