import React, { useEffect } from 'react';
import DocumentationTemplate from './chip-selected.mdx';
import { BdsChipSelected } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Chip Selected',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-chip-selected
    color={args.color}
    icon={args.icon}
    selected={args.selected}
    disabled={args.disabled}
    size={args.size}
    data-test={args.dataTest}
  >
    Chip-selected Default
  </bds-chip-selected>
);

Properties.argTypes = {
  color: {
    table: {
      defaultValue: { summary: 'default' },
    },
    description: 'Escolha a cor do chip selected.',
    options: ['default', 'danger', 'info', 'outline', 'success', 'warning'],
    control: 'select',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Escolha o ícone no componente.',
    control: 'text',
  },
  selected: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o componente será iniciado selecionado.',
    control: 'boolean',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o componente está desabilitado.',
    control: 'boolean',
  },
  size: {
    table: {
      defaultValue: { summary: 'standard' },
    },
    description: 'Escolha o tamanho do chip.',
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
};

Properties.args = {
  color: 'default',
  icon: '',
  selected: false,
  disabled: false,
  size: 'tall',
  dataTest: '',
};

export const Events = () => {
  useEffect(() => {
    const chip = document.getElementById('chip-selected');
    chip.addEventListener('chipClick', () => {
      console.log('Evento chipClick funcionando');
    });
  });
  return (
    <bds-chip-selected id="chip-selected" color="default" icon="" selected={false} disabled={false} size="tall">
      Chip-selected Default
    </bds-chip-selected>
  );
};

export const FrameworkReact = () => (
  <BdsChipSelected color="default" icon="" selected={false} disabled={false} size="tall">
    Chip-selected Default
  </BdsChipSelected>
);
