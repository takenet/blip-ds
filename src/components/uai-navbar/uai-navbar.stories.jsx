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
 * Agrupe as ações de navegação com UaiNavbarContent. Use horizontal no topo da página e vertical como barra lateral; space-between deixa as ações principais no início e as da conta no fim.
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
    description: 'Direção do eixo principal dos grupos de conteúdo.',
    control: 'select',
    options: ['horizontal', 'vertical'],
  },
  justifyContent: {
    table: { defaultValue: { summary: 'space-between' } },
    description: 'Distribuição dos grupos de conteúdo no eixo principal.',
    control: 'select',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
  },
  backgroundColor: {
    table: { defaultValue: { summary: 'surface-paper' } },
    description: 'Token de superfície UAI usado no fundo do Navbar.',
    control: 'select',
    options: ['surface-background', 'surface-contrast', 'surface-inverse', 'surface-muted', 'surface-paper'],
  },
};
