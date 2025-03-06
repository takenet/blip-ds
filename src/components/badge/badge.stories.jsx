import React from 'react';
import DocumentationTemplate from './badge.mdx';
import { BdsBadge } from '../../../blip-ds-react/dist/components';

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
  <bds-badge shape={args.shape} color={args.color} icon={args.icon} number={args.number ? args.number : null} animation={args.animation}></bds-badge>
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
    description: 'Define o número a ser exibido no badge.',
    control: 'number',
  },
};

Properties.args = {
  shape: 'circle',
  color: 'system',
  icon: 'info',
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
        <bds-typo bold="bold">Icon</bds-typo>
      </bds-grid>
      <bds-grid direction="column" align-items="center" gap="2">
        <bds-badge shape="circle" color="system" number={1234}></bds-badge>
        <bds-typo bold="bold">Number</bds-typo>
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

export const FrameworkReact = () => (
  <BdsBadge animation={true} shape="circle" color="system" icon="info"></BdsBadge>
);