import React from 'react';
import readme from './readme.md';

export default {
  title: 'NavBar',
  parameters: {
    notes: { markdown: readme },
  },
};

export const NavbarDocs = (args) => {
  return (
    <bds-navbar class="nav" navbar-position={args.navbarPosition} background={args.navbarBackground}>
      <div slot="content-area">
        <bds-button-icon size="short" variant="secondary" icon="attention"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="attention"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="attention"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="attention"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="attention"></bds-button-icon>
      </div>
      <div slot="action-area">
        <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
        <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
        <bds-avatar name="Dwight Schrute" size="small"></bds-avatar>
      </div>
    </bds-navbar>
  );
};

NavbarDocs.argTypes = {
  navbarPosition: {
    table: {
      defaultValue: { summary: 'horizontal | vertical' },
    },
    description: 'Coloque a disposição da navegação.',
    control: 'text',
  },
  navbarBackground: {
    table: {
      defaultValue: { summary: 'surface-1 | surface-2 | surface-3 | surface-4' },
    },
    description: 'Coloque a cor de fundo da navegação.',
    control: 'text',
  },
};

NavbarDocs.args = {
  navbarPosition: 'horizontal',
  navbarBackground: 'surface-1',
};
