import React, { useEffect } from 'react';
import DocumentationTemplate from './checkbox.mdx';
import { BdsCheckbox } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Checkbox',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-checkbox
    label={args.label}
    name={args.name}
    disabled={args.disabled}
    checked={args.checked}
    data-test={args.dataTest}
  ></bds-checkbox>
);

Properties.argTypes = {
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o texto do label do checkbox.',
    control: 'text',
  },
  name: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Define o nome do checkbox.',
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o checkbox estará desabilitado.',
    control: 'boolean',
  },
  checked: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Define se o checkbox estará marcado.',
    control: 'boolean',
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
  label: 'Opção do checkbox',
  name: 'check',
  disabled: false,
  checked: true,
  dataTest: '',
};

export const Events = () => {
  useEffect(() => {
    const checkbox = document.getElementById('check1');
    checkbox.addEventListener('bdsChange', (e) => {
      console.log('Checked: ', e.detail.checked);
    });
  });
  return <bds-checkbox id="check1" label="Selected" checked></bds-checkbox>;
};

export const FrameworkReact = () => {
  return <BdsCheckbox id="check1" label="Selected" checked></BdsCheckbox>;
};