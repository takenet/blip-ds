import React, { useEffect } from 'react';
import DocumentationTemplate from './input-phone-number.mdx';
import { BdsInputPhoneNumber } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Input Phone Number',
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
    <bds-input-phone-number
      label={args.label}
      disabled={args.disabled}
      danger={args.danger}
      icon={args.icon}
      value={args.value}
      language={args.language}
      error-message={args.errorMessage}
      helper-message={args.helperMessage}
    ></bds-input-phone-number>
  );
};

Properties.args = {
  label: 'Phone Number',
  disabled: false,
  danger: false,
  icon: '',
  value: '',
  language:'pt_BR',
  errorMessage: '',
  helperMessage: '',
};

Properties.argTypes = {
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
      defaultValue: { summary: 'vazio' },
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
  language: {
    table: {
      defaultValue: { summary: 'pt_BR' },
    },
    options: ['pt_BR', 'en_US', 'es_ES'],
    control: 'select',
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
};

export const Events = () => {
  useEffect(() => {
    const inputPhoneNumber = document.getElementById('input-phone-number');
    inputPhoneNumber.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    inputPhoneNumber.addEventListener('bdsCancel', () => {
      console.log('Evento Cancel funcionando');
    });
    inputPhoneNumber.addEventListener('bdsFocus', () => {
      console.log('Evento Change funcionando');
    });
    inputPhoneNumber.addEventListener('bdsInput', () => {
      console.log('Evento Focus funcionando');
    });
    inputPhoneNumber.addEventListener('bdsPhoneNumberChange', () => {
      console.log('Evento inputPhoneNumber funcionando');
    });
  });
  return <bds-input-phone-number id="input-phone-number" label="Phone Number"></bds-input-phone-number>;
};

export const FrameworkReact = () => (
  <BdsInputPhoneNumber placeholder="placeholder" label="label do input"></BdsInputPhoneNumber>
);
