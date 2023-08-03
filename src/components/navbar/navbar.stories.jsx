import React from 'react';
import readme from './readme.md';

export default {
  title: 'NavBar',
  parameters: {
    notes: { markdown: readme },
  },
};

const Template = (args) => {
  return (
    <bds-navbar class="nav" navbar-position={args.navbarPosition} background={args.background}>
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

export const NavBarVertical = Template.bind({});
NavBarVertical.args = { navbarPosition: 'vertical', background: 'surface-1' };

export const NavBarHorizontal = Template.bind({});
NavBarHorizontal.args = { navbarPosition: 'horizontal', background: 'surface-1' };

export const NavBarSuface1 = Template.bind({});
NavBarSuface1.args = { navbarPosition: 'horizontal', background: 'surface-1' };

export const NavBarSuface2 = Template.bind({});
NavBarSuface2.args = { navbarPosition: 'horizontal', background: 'surface-2' };

export const NavBarSuface3 = Template.bind({});
NavBarSuface3.args = { navbarPosition: 'horizontal', background: 'surface-3' };

export const NavBarSuface4 = Template.bind({});
NavBarSuface4.args = { navbarPosition: 'horizontal', background: 'surface-4' };
