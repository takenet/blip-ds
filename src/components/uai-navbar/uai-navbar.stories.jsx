import React from 'react';
import DocumentationTemplate from './uai-navbar.mdx';
import { BdsAvatar, BdsButtonIcon, UaiNavbar, UaiNavbarContent } from '../../../blip-ds-react/dist/components';

export default {
  title: 'UAI/Navbar',
  component: UaiNavbar,
  subcomponents: { UaiNavbarContent },
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

/**
 * Group navigation actions with UaiNavbarContent. Use horizontal at the top of a page and vertical as a side rail; space-between keeps the main actions at the start and the account actions at the end.
 */
export const Playground = (args) => (
  <UaiNavbar {...args}>
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

Playground.args = { orientation: 'horizontal', justifyContent: 'space-between', backgroundColor: 'surface-paper' };

Playground.argTypes = {
  orientation: {
    table: { defaultValue: { summary: 'vertical' } },
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
