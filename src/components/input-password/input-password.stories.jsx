import React, {useEffect} from 'react';
import DocumentationTemplate from './input-password.mdx';
import { BdsInputPassword } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Input Password',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
    <bds-input-password
      label={args.label}
      danger={args.danger}
      disabled={args.disabled}
      value={args.value}
      error-message={args.errorMessage}
      helper-message={args.helperMessage}
      min={args.min}
      minlength={args.minlength}
      max={args.max}
      maxlength={args.maxlength}
      readonly={args.readonly}
    ></bds-input-password>
);

Properties.args = {
  label: 'Senha',
  disabled: false,
  danger: false,
  value: '',
  errorMessage: '',
  helperMessage: '',
  min: '',
  minlength: 0,
  max: '',
  maxlength: 30,
  readonly: false,
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
  min: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'text',
  },
  maxlength: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'number',
  },
  max: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'text',
  },
  maxlength: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'number',
  },
  readonly: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
};

export const Events = () => {
  useEffect(() => {
    const inputPassword = document.getElementById('input-password');
    inputPassword.addEventListener('bdsInputPasswordBlur', () => {
      console.log('Evento Blur funcionando');
    });
    inputPassword.addEventListener('bdsInputPasswordChange', () => {
      console.log('Evento Cancel funcionando');
    });
    inputPassword.addEventListener('bdsInputPasswordFocus', () => {
      console.log('Evento Change funcionando');
    });
    inputPassword.addEventListener('bdsInputPasswordInput', () => {
      console.log('Evento Focus funcionando');
    });
    inputPassword.addEventListener('bdsInputPasswordSubmit', () => {
      console.log('Evento Input funcionando');
    });
    inputPassword.addEventListener('bdsKeyDownBackspace', () => {
      console.log('Evento Selected Change funcionando');
    });
  });
  return (
    <bds-input-password id="input-password" value="">
    </bds-input-password>
  );
};

export const FrameworkReact = () => (
  <BdsInputPassword
    placeholder="placeholder"
    label="label do input"
  ></BdsInputPassword>
);
