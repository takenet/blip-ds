import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Autocomplete',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const styles = {
  'height': "100vh",
}

export const defaultSelect = () => (
  <div style={styles}>
  <bds-autocomplete>
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-autocomplete>
  <br />
  <bds-autocomplete placeholder="Select">
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-autocomplete>
  </div>
);

export const iconSelect = () => (
  <div style={styles}>
    <bds-autocomplete icon="favorite">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
    <br />
    <bds-autocomplete disabled icon="favorite">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  </div>
);

export const selectedSelect = () => (
  <div style={styles}>
    <bds-autocomplete value="2">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
    <br />
    <bds-autocomplete disabled value="2">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  </div>
);

export const disabledSelect = () => (
  <div style={styles}>
    <bds-autocomplete disabled>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
    <br />
    <bds-autocomplete icon="favorite" disabled>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  </div>
);

export const selectWithIconOnSlot = () => (
  <div style={styles}>
   <bds-autocomplete placeholder="Select" label="Permission">
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
  </div>
  
);
