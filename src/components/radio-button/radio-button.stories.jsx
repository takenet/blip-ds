import React, {useEffect} from 'react';
import DocumentationTemplate from './radio-button.mdx';
import { BdsRadioGroup, BdsRadio, BdsTypo, BdsGrid } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Radio Button',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => (
  <bds-radio-group>
    <bds-grid direction="column" gap="2">
      <bds-typo bold="bold">Radio group</bds-typo>
      <bds-radio value="radio1" label={args.label} checked={args.checked} disabled={args.disabled}></bds-radio>
      <bds-radio value="radio2" label="Radio 2"></bds-radio>
    </bds-grid>
  </bds-radio-group>
);

Properties.args = {
  checked: false,
  disabled: false,
  label: 'Radio 1',
};

Properties.argTypes = {
  checked: {
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
  label: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    control: 'text',
  },
}

export const Events = () => {
  useEffect(() => {
    const radio = document.getElementById('radio-group');
    radio.addEventListener('bdsRadioGroupChange', () => {
      console.log('Evento bdsRadioGroupChange funcionando');
    });
  });
  return  (
  <bds-radio-group id="radio-group">
    <bds-grid direction="column" gap="2">
      <bds-typo bold="bold">Radio group</bds-typo>
      <bds-radio value="radio1" label="Radio 1"></bds-radio>
      <bds-radio value="radio2" label="Radio 2"></bds-radio>
    </bds-grid>
  </bds-radio-group>
);
}

export const FrameworkReact = () => (
  <BdsRadioGroup>
    <BdsGrid direction="column" gap="16px">
      <BdsTypo bold="bold">Radio group</BdsTypo>
      <BdsRadio value="radio1" label="Radio 1"></BdsRadio>
      <BdsRadio value="radio2" label="Radio 2"></BdsRadio>
    </BdsGrid>
  </BdsRadioGroup>
);