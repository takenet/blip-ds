import React from 'react';
import readme from './readme.md';

export default {
  title: 'Autocomplete',
  parameters: {
    notes: { markdown: readme },
  },
};

const Template = (args) => {
  return (
    <bds-autocomplete
      label={args.label}
      icon={args.icon}
      value={args.value}
      disabled={args.disabled}
      placeholder="Select"
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

const TemplateIconSlot = (args) => {
  return (
    <bds-autocomplete
      label={args.label}
      icon={args.icon}
      value={args.value}
      disabled={args.disabled}
      placeholder="Select"
      search-only-title="false"
    >
      <bds-select-option value="1" slot-align="flex-start" title-text="Guest">
        <bds-icon slot="input-left" name="eye-open" size="medium" color="#F66689"></bds-icon>
        Only views contract information.
      </bds-select-option>
      <bds-select-option value="2" slot-align="flex-start" title-text="Member">
        <bds-icon slot="input-left" name="edit" size="medium" color="#F9B42F"></bds-icon>
        Creates and edits chatbots, but does not manage contract members.
      </bds-select-option>
      <bds-select-option value="3" slot-align="flex-start" title-text="Admin">
        <bds-icon slot="input-left" name="avatar-user" size="medium" color="#2CC3D5"></bds-icon>
        Edits all contract data, manages members, creates and edits chatbots.
      </bds-select-option>
    </bds-autocomplete>
  );
};

export const defaultSelect = Template.bind({});
defaultSelect.args = { label: '', icon: '', value: null, disabled: false };

export const iconSelect = Template.bind({});
iconSelect.args = { label: '', icon: 'favorite', value: null, disabled: false };

export const selectedSelect = Template.bind({});
selectedSelect.args = { label: '', icon: '', value: 2, disabled: false };

export const disabledSelect = Template.bind({});
disabledSelect.args = { label: '', icon: '', value: 2, disabled: true };

export const selectWithIconOnSlot = TemplateIconSlot.bind({});
selectWithIconOnSlot.args = { label: '', icon: '', value: null, disabled: false };
