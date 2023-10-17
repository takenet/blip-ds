import React, {useEffect} from 'react';
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
  <bds-card clickable={args.clickable} width={args.width} height={args.height}>
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
} 
Properties.argTypes = {
  clickable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  alignHeader: {
    table: {
      defaultValue: { summary: 'space-between' },
    },
    name: 'align',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    control: 'select',
  },
  alignFooter: {
    table: {
      defaultValue: { summary: 'flex-end' },
    },
    name: 'align',
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    control: 'select',
  },
  height: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  width: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
};

Properties.args = {
  clickable: true,
  alignHeader: '',
  alignFooter: 'center',
  height: '',
  width: 'fit-content',
};

export const Events = () => {
  useEffect(() => {
    const card = document.getElementById('card');
    card.addEventListener('cardClick', () => {
      console.log('Evento cardClick funcionando');
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
} 



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
