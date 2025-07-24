import React, { useEffect } from 'react';
import { BdsSelectChips } from '../../../../blip-ds-react/dist/components';
import DocumentationTemplate from './select-chips.mdx';

export default {
  title: 'Components/Select Chips',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '270px';
  }
  return (
      <bds-select-chips new-prefix={args.newPrefix} can-add-new={args.canAddNew} chips={args.chips} options={args.options} placeholder={args.placeholder} label={args.label} disabled={args.disabled} danger={args.danger} icon={args.icon} value={args.value} error-message={args.errorMessage} helper-message={args.helperMessage} success-message={args.successMessage} success={args.success}>
      </bds-select-chips>
  );
};

Properties.args = {
  canAddNew: true,
  newPrefix: 'Create: ',
  chips: '["Millie Bobby"]',
  options: '[{"value": "1", "label": "Millie Bobby"}, {"value": "2", "label": "Finn Wolfhard"}, {"value": "3", "label": "David Harbour"}, {"value": "4", "label": "Gaten Matarazzo"}, {"value": "5", "label": "Caleb McLaughlin"}, {"value": "6", "label": "Noah Schnapp"}]',
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
  canAddNew: {
    table: {
      defaultValue: { summary: 'true' },
    },
    control: 'boolean',
  },
  newPrefix: {
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
  options: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
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
    const selectChips = document.getElementById('select-chips');
    selectChips.addEventListener('bdsBlur', () => {
      console.log('Evento Blur funcionando');
    });
    selectChips.addEventListener('bdsCancel', () => {
      console.log('Evento Cancel funcionando');
    });
    selectChips.addEventListener('bdsChange', () => {
      console.log('Evento Change funcionando');
    });
    selectChips.addEventListener('bdsChangeChips', (obj) => {
      console.log('Evento Focus funcionando', obj);
    });
    selectChips.addEventListener('bdsFocus', () => {
      console.log('Evento Input funcionando');
    });
    selectChips.addEventListener('bdsSelectChipsInput', () => {
      console.log('Evento Selected Change funcionando');
    });
    selectChips.addEventListener('bdsSubmit', () => {
      console.log('Evento Selected Change funcionando');
    });
  });
  return (
    <bds-select-chips id="select-chips">
        <bds-select-option value="1">Millie Bobby</bds-select-option>
        <bds-select-option value="2">Finn Wolfhard</bds-select-option>
        <bds-select-option value="3">David Harbour</bds-select-option>
        <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
        <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
        <bds-select-option value="6">Noah Schnapp</bds-select-option>
      </bds-select-chips>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsSelectChips
      new-prefix="Create: "
      can-add-new={true}
      options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
    ></BdsSelectChips>
  );
};
