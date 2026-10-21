import React from 'react';
import DocumentationTemplate from './uai-navbar.mdx';
import { BdsAvatar, BdsButtonIcon, UaiNavbar, UaiNavbarContent } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Navigation/Navbar',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const NavbarContent = () => (
  <>
    <uai-navbar-content>
      <bds-button-icon size="short" variant="secondary" icon="home"></bds-button-icon>
      <bds-button-icon size="short" variant="secondary" icon="store"></bds-button-icon>
      <bds-button-icon size="short" variant="secondary" icon="team"></bds-button-icon>
      <bds-button-icon size="short" variant="secondary" icon="cloud"></bds-button-icon>
      <bds-button-icon size="short" variant="secondary" icon="integration"></bds-button-icon>
    </uai-navbar-content>
    <uai-navbar-content>
      <bds-button-icon size="short" variant="secondary" icon="settings-general"></bds-button-icon>
      <bds-button-icon size="short" variant="secondary" icon="question"></bds-button-icon>
      <bds-button-icon size="short" variant="secondary" icon="bell"></bds-button-icon>
      <bds-avatar name="Dwight Schrute" size="small"></bds-avatar>
    </uai-navbar-content>
  </>
);

export const WebComponent = (args) => (
  <uai-navbar
    orientation={args.orientation}
    justify-content={args.justifyContent}
    background-color={args.backgroundColor}
  >
    <NavbarContent />
  </uai-navbar>
);

export const FrameworkReact = (args) => (
  <UaiNavbar
    orientation={args.orientation}
    justifyContent={args.justifyContent}
    backgroundColor={args.backgroundColor}
  >
    <UaiNavbarContent>
      <BdsButtonIcon size="short" variant="secondary" icon="home" />
      <BdsButtonIcon size="short" variant="secondary" icon="store" />
      <BdsButtonIcon size="short" variant="secondary" icon="team" />
      <BdsButtonIcon size="short" variant="secondary" icon="cloud" />
      <BdsButtonIcon size="short" variant="secondary" icon="integration" />
    </UaiNavbarContent>
    <UaiNavbarContent>
      <BdsButtonIcon size="short" variant="secondary" icon="settings-general" />
      <BdsButtonIcon size="short" variant="secondary" icon="question" />
      <BdsButtonIcon size="short" variant="secondary" icon="bell" />
      <BdsAvatar name="Dwight Schrute" size="small" />
    </UaiNavbarContent>
  </UaiNavbar>
);

WebComponent.args = { orientation: 'horizontal', justifyContent: 'space-between', backgroundColor: 'surface-paper' };
FrameworkReact.args = WebComponent.args;

const argTypes = {
  orientation: {
    table: { defaultValue: { summary: 'horizontal' } },
    description: 'Main axis direction for the content groups.',
    control: 'select',
    options: ['horizontal', 'vertical'],
  },
  justifyContent: {
    table: { defaultValue: { summary: 'space-between' } },
    description: 'Distribution of content groups along the main axis.',
    control: 'select',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
  },
  backgroundColor: {
    table: { defaultValue: { summary: 'surface-paper' } },
    description: 'UAI surface token used for the Navbar background.',
    control: 'select',
    options: ['surface-background', 'surface-contrast', 'surface-inverse', 'surface-muted', 'surface-paper'],
  },
};

WebComponent.argTypes = argTypes;
FrameworkReact.argTypes = argTypes;
