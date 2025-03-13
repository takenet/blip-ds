import React, { useEffect } from 'react';
import DocumentationTemplate from './card.mdx';
import { BdsButton, BdsCard, BdsCardBody, BdsCardFooter, BdsCardHeader, BdsCardTitle, BdsGrid, BdsIcon } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Card',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '820px';
    el[0].style.width = 'auto';
  }
  return (
    <bds-card clickable={args.clickable} width={args.width} height={args.height} bg-color={args.bgColor} selectable={args.selectable} border-color={args.borderColor}>
      <bds-card-header align={args.alignHeader}>
        <bds-avatar name="Blip" size="small"></bds-avatar>
        <bds-grid direction="column">
          <bds-card-title text="@TakeBlip"></bds-card-title>
          <bds-card-subtitle text="10/10/21 11:20 | atualizado há 10 min"></bds-card-subtitle>
        </bds-grid>
        <bds-button-icon size="small" variant="secondary" icon="more-options-vertical"></bds-button-icon>
      </bds-card-header>
      <bds-card-body>
        <bds-grid direction="column" xxs="12" gap="1" justify-content="center" align-items="center">
          <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
        </bds-grid>
      </bds-card-body>
      <bds-card-footer align={args.alignFooter}>
        <bds-typo bold="bold">Blip Chat</bds-typo>
      </bds-card-footer>
    </bds-card>
  );
};

Properties.argTypes = {
  clickable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o card será clicável.',
    control: 'boolean',
  },
  alignHeader: {
    table: {
      defaultValue: { summary: 'space-between' },
    },
    name: 'alignHeader',
    description: 'Define o alinhamento do cabeçalho do card.',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    control: 'select',
  },
  alignFooter: {
    table: {
      defaultValue: { summary: 'flex-end' },
    },
    name: 'alignFooter',
    description: 'Define o alinhamento do rodapé do card.',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    control: 'select',
  },
  height: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define a altura do card.',
    control: 'text',
  },
  width: {
    table: {
      defaultValue: { summary: 'fit-content' },
    },
    description: 'Define a largura do card.',
    control: 'text',
  },
  bgColor: {
    table: {
      defaultValue: { summary: 'surface-1' },
    },
    description: 'Define a cor de fundo do card.',
    options: ['surface-0', 'surface-1', 'surface-2', 'surface-3'],
    control: 'select',
  },
  selectable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o card será selecionável.',
    control: 'boolean',
  },
  borderColor: {
    table: {
      defaultValue: { summary: 'border-1' },
    },
    description: 'Define a cor da borda do card.',
    options: ['border-0', 'border-1', 'border-2', 'border-3'],
    control: 'select',
  },
};

Properties.args = {
  clickable: true,
  alignHeader: 'space-between',
  alignFooter: 'center',
  height: '',
  width: 'fit-content',
  bgColor: 'surface-1',
  selectable: false,
  borderColor: 'border-1',
};

export const Events = () => {
  useEffect(() => {
    const card = document.getElementById('card');
    card.addEventListener('bdsClick', () => {
      console.log('Evento bdsClick funcionando');
    });
  });
  return (
    <bds-card id="card" clickable={true}>
      <bds-card-header align="center">
        <bds-card-title text="@TakeBlip"></bds-card-title>
      </bds-card-header>
      <bds-card-body>
        <bds-grid direction="column" xxs="12" gap="1" justify-content="center" align-items="center">
          <bds-icon type="logo" size="brand" name="blip-chat"></bds-icon>
        </bds-grid>
      </bds-card-body>
      <bds-card-footer>
        <bds-button size="standard" type="button" type-icon="icon" variant="tertiary">
          Botão Primário
        </bds-button>
      </bds-card-footer>
    </bds-card>
  );
};

export const FrameworkReact = () => (
  <BdsCard>
    <BdsCardHeader align="center">
      <BdsCardTitle text="@TakeBlip"></BdsCardTitle>
    </BdsCardHeader>
    <BdsCardBody>
      <BdsGrid direction="column" xxs="12" gap="1" justify-content="center" align-items="center">
        <BdsIcon type="logo" size="brand" name="blip-chat"></BdsIcon>
      </BdsGrid>
    </BdsCardBody>
    <BdsCardFooter>
      <BdsButton size="standard" type="button" type-icon="icon" variant="tertiary">
        Botão Primário
      </BdsButton>
    </BdsCardFooter>
  </BdsCard>
);
