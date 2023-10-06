import React, {useEffect} from 'react';
import DocumentationTemplate from './input-editable.mdx';
import { BdsInputEditable } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Input Editable',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-input-editable
      input-name={args.inputName}
      value={args.value}
      minlength={args.minlength}
      minlength-error-message={args.minlengthErrorMessage}
      required-error-message={args.requiredErrorMessage}
      maxlength={null}
      error-message=""
      danger={false}
    ></bds-input-editable>
  );
};

Properties.args = {
  inputName: '',
  value: 'Storybook',
  minlength: 3,
  minlengthErrorMessage: '',
  requiredErrorMessage: '',
  maxlength: null,
  errorMessage: '',
  danger: false,
};

Properties.argTypes = {
  inputName: {
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
  minlength: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'number',
  },
  minlengthErrorMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'text',
  },
  requiredErrorMessage: {
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
  errorMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'text',
  },
  danger: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
};

export const Events = () => {
  useEffect(() => {
    const inputEditable = document.getElementById('input-editable');
    inputEditable.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    inputEditable.addEventListener('bdsCancel', () => {
      console.log('Evento Cancel funcionando');
    });
    inputEditable.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    inputEditable.addEventListener('bdsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    inputEditable.addEventListener('bdsInput', () => {
      console.log('Evento Input funcionando');
    });
    inputEditable.addEventListener('bdsInputEditableSave', () => {
      console.log('Evento Selected Change funcionando');
    });
  });
  return <bds-input-editable id="input-editable" value="Storybook"></bds-input-editable>;
};

export const FrameworkReact = () => {
  return <BdsInputEditable value="Storybook"></BdsInputEditable>;
};
