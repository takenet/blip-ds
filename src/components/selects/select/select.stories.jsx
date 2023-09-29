import React, {useEffect} from 'react';
import DocumentationTemplate from './select.mdx';
import { BdsSelect, BdsSelectOption } from '../../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Select',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '250px';
  }
  return (
    <bds-select placeholder={args.placeholder} label={args.label} disabled={args.disabled} danger={args.danger}icon={args.icon} value={args.value} error-message={args.errorMessage} helper-message={args.helperMessage} success-message={args.successMessage} success={args.success}>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
)
}

Properties.args = {
  placeholder: 'nome completo',
  label: '',
  disabled: false,
  danger: false,
  icon: '',
  value: '',
  errorMessage: '',
  helperMessage: '',
  successMessage: '',
  success: false,
};

Properties.argTypes = {
  placeholder: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  danger: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
  icon: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  value: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  errorMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  helperMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  successMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
  success: {
    table: {
      defaultValue: { summary: 'false' },
    },
    control: 'boolean',
  },
}

export const Events = () => {
  useEffect(() => {
    const select = document.getElementById('select');
    select.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    select.addEventListener('bdsCancel', () => {
      console.log('Evento Cancel funcionando');
    });
    select.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    select.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
  });
  return (
  <bds-select id="select">
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-select>
);
} 

export const FrameworkReact = () => (
  <BdsSelect>
    <BdsSelectOption value="1">Millie Bobby</BdsSelectOption>
    <BdsSelectOption value="2">Finn Wolfhard</BdsSelectOption>
    <BdsSelectOption value="3">David Harbour</BdsSelectOption>
    <BdsSelectOption value="4">Gaten Matarazzo</BdsSelectOption>
    <BdsSelectOption value="5">Caleb McLaughlin</BdsSelectOption>
    <BdsSelectOption value="6">Noah Schnapp</BdsSelectOption>
  </BdsSelect>
);

