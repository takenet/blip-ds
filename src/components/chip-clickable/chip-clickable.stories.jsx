import React from 'react';
import DocumentationTemplate from './chip-clickable.mdx';
import { BdsChipClickable } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Chip Clickable',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-chip-clickable
    color={args.color}
    icon={args.icon}
    avatar={args.avatar}
    clickable={args.clickable}
    close={args.close}
    disabled={args.disabled}
    size={args.size}
    data-test={args.dataTest}
    dt-button-close={args.dtButtonClose}
  >
    Chip-clickable Default
  </bds-chip-clickable>
);

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'default' },
    },
    description: 'Define a cor do chip.',
    options: ['default', 'danger', 'info', 'outline', 'success', 'warning'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o ícone do chip.',
    control: 'text',
  },
  avatar: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o avatar do chip.',
    control: 'text',
  },
  clickable: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o chip será clicável.',
    control: 'boolean',
  },
  close: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o chip terá um botão de fechar.',
    control: 'boolean',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o chip estará desabilitado.',
    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'standard' },
    },
    description: 'Define o tamanho do chip.',
    options: ['standard', 'tall'],
    control: 'select',
  },
  dataTest: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o id para testes externos. (Sem alteração visual).',
    control: 'text',
  },
  dtButtonClose: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o id para testes externos do botão de fechar. (Sem alteração visual).',
    control: 'text',
  },
};

Properties.args = {
  color: 'default',
  icon: '',
  avatar: '',
  clickable: false,
  close: false,
  disabled: false,
  size: 'tall',
  dataTest: '',
  dtButtonClose: '',
};

export const Events = () => (
  <bds-chip-clickable color="default" icon="" avatar="" clickable={false} close={false} disabled={false} size="tall">
    Chip-clickable Default
  </bds-chip-clickable>
);

export const FrameworkReact = () => (
  <BdsChipClickable color="default" icon="" avatar="" clickable={false} close={false} disabled={false} size="tall">
    Chip-clickable Default
  </BdsChipClickable>
);
