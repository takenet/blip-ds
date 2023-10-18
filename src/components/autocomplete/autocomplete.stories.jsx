import React, { useEffect } from 'react';
import DocumentationTemplate from './autocomplete.mdx';
import { BdsAutocomplete, BdsSelectOption } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Autocomplete',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '300px';
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
      selection-type={args.selectionType}
      selection-title={args.selectionTitle}
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
  selectionType: {
    table: {
      defaultValue: { summary: 'single' },
    },
    description: 'Defina se o tipo de seleção dos itens no componente.',
    options: ['single', 'multiple'],
    control: 'select',
  },
  selectionTitle: {
    table: {
      defaultValue: { summary: '' },
    },
    description: 'Defina se o titulo para a multi-seleção.',
    control: 'string',
  },
};

Properties.args = {
  label: 'Label',
  icon: '',
  disabled: false,
  placeholder: 'Selecione uma opção',
  selectionType: 'single',
  selectionTitle: 'Selection Title',
};

export const Events = () => {
  useEffect(() => {
    const autocomplete = document.getElementById('autocomplete');
    autocomplete.addEventListener('bdsMultiselectedChange', () => {
      console.log('Evento Multiselected Change funcionando');
    });
    autocomplete.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    autocomplete.addEventListener('bdsCancel', () => {
      console.log('Evento Cancel funcionando');
    });
    autocomplete.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    autocomplete.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    autocomplete.addEventListener('bdsInput', () => {
      console.log('Evento Input funcionando');
    });
    autocomplete.addEventListener('bdsSelectedChange', () => {
      console.log('Evento Selected Change funcionando');
    });
  });
  return (
    <>
      <bds-autocomplete id="autocomplete" label="label" icon="email" value="" disabled={false} placeholder="Select">
        <bds-select-option value="1">Millie Bobby</bds-select-option>
        <bds-select-option value="2">Finn Wolfhard</bds-select-option>
        <bds-select-option value="3">David Harbour</bds-select-option>
        <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
        <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
        <bds-select-option value="6">Noah Schnapp</bds-select-option>
      </bds-autocomplete>
    </>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsAutocomplete label="label" icon="email" value="" disabled={false} placeholder="Select">
      <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
      <BdsSelectOption value="2">Finn Wolfhard</BdsSelectOption>
      <BdsSelectOption value="3">David Harbour</BdsSelectOption>
      <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
      <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
      <BdsSelectOption value="6">Noah Schnapp</BdsSelectOption>
    </BdsAutocomplete>
  );
};
