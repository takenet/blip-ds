import React from 'react';
import DocumentationTemplate from './autocomplete.mdx';

export default {
  title: 'Components/Autocomplete',
  parameters: {
    docs: {
      page: DocumentationTemplate
    }
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '400px';
    el[0].style.position = 'relative';
    el[0].style.background = 'none';
  }
  return (
    <bds-autocomplete
      label={args.label}
      icon={args.icon}
      value={args.value}
      disabled={args.disabled}
      placeholder={args.placeholder}
      options-position="bottom"
    >
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  );
};
Properties.argTypes = {
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Coloque o texto de label.',
    control: 'text',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Defina o ícone que será utilizado no botão (Apenas outline).',
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Defina se o componente vai estar desabilitado.',
    control: 'boolean',
  },
};

Properties.args = {
  label: 'Label',
  icon: '',
  disabled: false,
  placeholder: 'Selecione uma opção'
};

export const Events = (args) => {
  return (
    <bds-autocomplete
      label={args.label}
      icon={args.icon}
      value={args.value}
      disabled={args.disabled}
      placeholder="Select"
    >
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  );
};

export const FrameworkReact = (args) => {
  return (
    <bds-autocomplete
      label={args.label}
      icon={args.icon}
      value={args.value}
      disabled={args.disabled}
      placeholder="Select"
    >
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  );
};