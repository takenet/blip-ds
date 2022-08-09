import React from 'react';
import readme from './readme.md';

export default {
  title: 'Radio',
  parameters: {
    notes: { markdown: readme },
  },
};

export const RadioGroup = () => (
  <bds-radio-group>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <bds-typo bold="bold">Radio group</bds-typo>
      <bds-radio value="radio1" label="Radio 1"></bds-radio>
      <bds-radio value="radio2" label="Radio 2"></bds-radio>
      <bds-radio value="radio3" label="Radio 3"></bds-radio>
    </div>
  </bds-radio-group>
);

export const DefaultRadio = () => (
  <>
    <bds-radio label="Click A" name="rd1" disabled={false} checked={false}></bds-radio>
  </>
);

export const DisabledRadio = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <bds-radio id="radio1" label="Selected" checked disabled></bds-radio>
    <bds-radio id="radio2" label="Deselected" disabled></bds-radio>
  </div>
);

export const WithoutLabelRadio = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <bds-radio id="radio1" checked></bds-radio>
    <bds-radio id="radio2"></bds-radio>
    <bds-radio id="radio1" checked disabled></bds-radio>
    <bds-radio id="radio2" disabled></bds-radio>
  </div>
);
