import React, {useEffect} from 'react';
import DocumentationTemplate from './checkbox.mdx';
import { BdsCheckbox } from '../../../blip-ds-react/dist/components';

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
    control: 'text',
  },
  name: {
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
  checked: {
    table: {
      defaultValue: { summary: 'false' },
    },
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

export const FrameworkReact = () => {
  return (
    <BdsCheckbox id="check1" label="Selected" checked></BdsCheckbox>
  )
}