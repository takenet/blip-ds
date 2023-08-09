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
    <bds-navbar
      orientation={args.orientation}
      justify-content={args.justifyContent}
      background-color={args.backgroundColor}
    >
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

export const NavBarProps = Template.bind({});
NavBarProps.args = { orientation: 'vertical', backgroundColor: 'surface-1' };
