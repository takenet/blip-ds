import React, { useEffect } from 'react';
import DocumentationTemplate from './input-chips.mdx';
import { BdsInputChips } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Input Chips',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-input-chips
      label={args.label}
      danger={args.danger}
      error-message={args.errorMessage}
      chips={args.chips}
      create-blur={args.createBlur}
      disable-submit={args.disableSubmit}
      disabled={args.disabled}
    ></bds-input-chips>
  );
};

Properties.args = {
  type: 'text',
  label: '',
  danger: false,
  errorMessage: '',
  chips: '["chip1", "chip2"]',
  createBlur: false,
  disableSubmit: false,
  disabled: false,
};

Properties.argTypes = {
  type: {
    table: {
      defaultValue: { summary: 'text' },
    },
    
    options: ['email', 'text'],
    control: 'select',
  },
  label: {
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
  errorMessage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'text',
  },
  chips: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    
    control: 'text',
  },
  createBlur: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
  disableSubmit: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
  disabled: {
    table: {
      defaultValue: { summary: 'false' },
    },
    
    control: 'boolean',
  },
};

export const Events = () => {
  useEffect(() => {
    const inputChips = document.getElementById('input-chips');
    inputChips.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    inputChips.addEventListener('bdsChangeChips', () => {
      console.log('Evento Cancel funcionando');
    });
    inputChips.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    inputChips.addEventListener('bdsInputChipsFocus', () => {
      console.log('Evento Focus funcionando');
    });
    inputChips.addEventListener('bdsInputChipsInput', () => {
      console.log('Evento InputChips funcionando');
    });
    inputChips.addEventListener('bdsExtendedQuantityInput', () => {
      console.log('Evento Selected Change funcionando');
    });
    inputChips.addEventListener('bdsSubmit', () => {
      console.log('Evento Selected Change funcionando');
    });
  });
  return <bds-input-chips id="input-chips" label="input chips" chips='["chip1", "chip2"]'></bds-input-chips>;
};

export const FrameworkReact = () => {
  return <BdsInputChips id="input-chips" label="input chips" chips='["chip1", "chip2"]'></BdsInputChips>;
};
