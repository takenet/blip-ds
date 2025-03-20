import React, { useEffect } from 'react';
import DocumentationTemplate from './badge.mdx';
import { BdsBadge, BdsButton, BdsGrid } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Badge',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const mixBadge = {
  display: 'inline-flex',
  position: 'relative',
};
const badge = {
  display: 'flex',
  position: 'absolute',
  right: '-8px',
  top: '-8px',
};
const badgeStatus = {
  display: 'flex',
  position: 'absolute',
  right: '0',
  top: '0',
};

export const Properties = (args) => (
  <bds-badge shape={args.shape} color={args.color} icon={args.icon} icon-theme={args.iconTheme} number={args.number ? args.number : null} animation={args.animation}></bds-badge>
);
Properties.argTypes = {
  shape: {
    table: {
      defaultValue: { summary: 'circle' },
    },
    description: 'Define o formato do badge.',
    options: ['circle', 'triangle', 'triangle-reverse', 'polygon', 'square'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o ícone a ser exibido no badge.',
    control: 'text',
  },
  iconTheme: {
    table: {
      defaultValue: { summary: 'outline' },
    },
    description: 'Define o tema do ícone.',
    options: ['outline', 'solid'],
    control: 'select',
  },
  color: {
    table: {
      defaultValue: { summary: 'system' },
    },
    description: 'Define a cor do badge.',
    options: ['system', 'danger', 'warning', 'success', 'neutral'],
    control: 'select',
  },
  animation: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Ativa a animação do badge.',
    control: 'boolean',
  },
  number: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o número a ser exibido no badge. Funciona apenas se o formato for círculo.',
    control: 'number',
  },
};

Properties.args = {
  shape: 'circle',
  color: 'system',
  icon: 'info',
  iconTheme: 'outline',
  animation: false,
  number: null
};

export const typeBadge = () => (
  <bds-grid direction="column" gap="3" padding="4" align-items="center" justify-content="center">
    <bds-grid gap="4" margin="3" align-items="center">
      <bds-grid direction="column" align-items="center" gap="4">
        <bds-badge shape="circle" color="system"></bds-badge>
        <bds-typo bold="bold">Status</bds-typo>
      </bds-grid>
      <bds-grid direction="column" align-items="center" gap="2">
        <bds-badge shape="circle" color="system" icon="info"></bds-badge>
        <bds-typo bold="bold">Ícone</bds-typo>
      </bds-grid>
      <bds-grid direction="column" align-items="center" gap="2">
        <bds-badge shape="circle" color="system" number={1234}></bds-badge>
        <bds-typo bold="bold">Número</bds-typo>
      </bds-grid>
    </bds-grid>
  </bds-grid>
);

export const exampleBadge = () => (
  <bds-grid gap="4" padding="4" align-items="center" justify-content="center">
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badge}>
        <bds-badge shape="circle" color="system" animation number={1}></bds-badge>
      </div>
    </bds-grid>
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badge}>
        <bds-badge shape="circle" color="system" animation icon="info"></bds-badge>
      </div>
    </bds-grid>
    <bds-grid style={mixBadge}>
      <bds-icon name="bell" size="large"></bds-icon>
      <div style={badgeStatus}>
        <bds-badge shape="circle" color="system" animation></bds-badge>
      </div>
    </bds-grid>
  </bds-grid>
);

export const Methods = () => {
  useEffect(() => {
    const badge = document.getElementById('badge');
    badge.addEventListener('bdsChange', () => {
      console.log('bdsChange event');
    });
  });

  const changeColor = async () => {
    const badge = document.getElementById('badge');
    await badge.setColor('danger');
  };

  const changeIcon = async () => {
    const badge = document.getElementById('badge');
    await badge.setIcon('warning');
  };

  const changeIconTheme = async () => {
    const badge = document.getElementById('badge');
    await badge.setIconTheme('solid');
  };

  const changeNumber = async () => {
    const badge = document.getElementById('badge');
    await badge.setNumber(10);
  };

  const toggleAnimation = async () => {
    const badge = document.getElementById('badge');
    const currentAnimation = badge.animation;
    await badge.setAnimation(!currentAnimation);
  };

  const changeType = async () => {
    const badge = document.getElementById('badge');
    await badge.setType('icon');
  };

  const changeShape = async () => {
    const badge = document.getElementById('badge');
    await badge.setShape('square');
  };

  return (
    <BdsGrid direction='column' gap='4' alignItems='center'>
      <BdsBadge id="badge" color="system" shape="circle" number="5"></BdsBadge>
      <BdsGrid gap="4">
        <BdsButton onClick={changeColor}>Mudar Cor</BdsButton>
      <BdsButton onClick={changeIcon}>Mudar Ícone</BdsButton>
      <BdsButton onClick={changeIconTheme}>Mudar Tema do Ícone</BdsButton>
      <BdsButton onClick={changeNumber}>Mudar Número</BdsButton>
      <BdsButton onClick={toggleAnimation}>Alternar Animação</BdsButton>
      <BdsButton onClick={changeType}>Mudar Tipo</BdsButton>
      <BdsButton onClick={changeShape}>Mudar Formato</BdsButton>
      </BdsGrid>
      
    </BdsGrid>
  );
};

export const FrameworkReact = () => (
  <BdsBadge animation={true} shape="circle" color="system" icon="info"></BdsBadge>
);