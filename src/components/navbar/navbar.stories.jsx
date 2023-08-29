import React from 'react';
import readme from './readme.md';
import { BdsNavbar, BdsNavbarContent, BdsAvatar, BdsButtonIcon } from '../../../blip-ds-react/dist/components';

export default {
  title: 'NavBar',
  parameters: {
    notes: { markdown: readme },
  },
};

export const NavBarProps = (args) => {
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

NavBarProps.argTypes = {
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
NavBarProps.args = { orientation: 'vertical', justifyContent: 'space-between', backgroundColor: 'surface-1' };

export const NavBarReact = () => {
  return (
    <BdsNavbar orientation="horizontal" justifyContent="space-between" backgroundColor="surface-1">
      <BdsNavbarContent>
        <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
        <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
        <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
        <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
        <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
      </BdsNavbarContent>
      <BdsNavbarContent>
        <BdsButtonIcon size="short" variant="secondary" icon="settings-general"></BdsButtonIcon>
        <BdsButtonIcon size="short" variant="secondary" icon="question"></BdsButtonIcon>
        <BdsButtonIcon size="short" variant="secondary" icon="bell"></BdsButtonIcon>
        <BdsAvatar name="Dwight Schrute" size="small"></BdsAvatar>
      </BdsNavbarContent>
    </BdsNavbar>
  );
};
