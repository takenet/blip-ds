import React, {useEffect} from 'react';
import DocumentationTemplate from './checkbox.mdx';

export default {
  title: 'Components/Checkbox',
  parameters: {
    docs: {
      page: DocumentationTemplate
    }
  },
};

export const Properties = (args) => (
    <bds-checkbox label={args.label} name={args.name} disabled={args.disabled} checked={args.checked}></bds-checkbox>
);


Properties.argTypes = {
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o texto que acompanhará o checkbox.',
    control: 'text',
  },
  name: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o nome do elemento para controles externos.',
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o componente ficará desabilitado.',
    control: 'boolean',
  },
  checked: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Escolha se o accordion será iniciado aberto.',
    control: 'boolean',
  },
};

Properties.args = {
  label: 'Opção do checkbox',
  name: 'check',
  disabled: false,
  checked: true
};

export const Events = () => {
  useEffect(() => {
    const checkbox = document.getElementById('check1');
    checkbox.addEventListener('bdsChange', (e) => {
      console.log('Checked: ', e.detail.checked);
    });
  });
  return (
    <bds-checkbox id="check1" label="Selected" checked></bds-checkbox>
  )
}