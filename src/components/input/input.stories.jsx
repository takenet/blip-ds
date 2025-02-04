import React, {useEffect} from 'react';
import DocumentationTemplate from './input.mdx';
import { BdsInput } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Input',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '500px';
  }
  return (
    <bds-input
      placeholder={args.placeholder}
      label={args.label}
      disabled={args.disabled}
      danger={args.danger}
      success={args.success}
      icon={args.icon}
      value={args.value}
      type={args.type}
      error-message={args.errorMessage}
      helper-message={args.helperMessage}
      success-message={args.successMessage}
      min={args.min}
      minlength={args.minlength}
      max={args.max}
      maxlength={args.maxlength}
      readonly={args.readonly}
      is-textarea={args.istextarea}
      rows={args.rows}
      counter-length={args.counterlength}
      encode={args.encode}
    ></bds-input>
  );
};

Properties.args = {
  placeholder: 'nome completo',
  label: '',
  disabled: false,
  danger: false,
  success: false,
  icon: '',
  value: '',
  type: '',
  errorMessage: '',
  helperMessage: '',
  successMessage: '',
  min: '',
  minlength: 0,
  max: '',
  maxlength: 30,
  readonly: false,
  istextarea: false,
  rows: '',
  counterlength: false,
  encode: false,
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
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'boolean',
  },
  success: {
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
  type: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    options: ['text', 'password', 'email', 'number', 'phonenumber'],
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
  successMessage: {
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
  istextarea: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
  rows: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'text',
  },
  counterlength: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
  encode: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
};

export const Events = () => {
  useEffect(() => {
    const input = document.getElementById('input');
    input.addEventListener('bdsOnBlur', () => {
      console.log('Evento Blur funcionando');
    });
    input.addEventListener('bdsKeyDownBackspace', () => {
      console.log('Evento Cancel funcionando');
    });
    input.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    input.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    input.addEventListener('bdsInput', () => {
      console.log('Evento Input funcionando');
    });
    input.addEventListener('bdsPatternValidation', () => {
      console.log('Evento Selected Change funcionando');
    });
    input.addEventListener('bdsSubmit', () => {
      console.log('Evento Selected Change funcionando');
    });
  });
  return (
    <bds-input id="input" label="label" icon="email" value="" disabled={false} placeholder="texto aqui">
    </bds-input>
  );
};

export const FrameworkReact = () => (
  <BdsInput
    placeholder="placeholder"
    label="label do input"
  ></BdsInput>
);
