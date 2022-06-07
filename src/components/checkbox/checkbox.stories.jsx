import React from 'react';

import readme from './readme.md';

export default {
  title: 'Checkbox',
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultCheckBox = () => (
  <>
    <bds-checkbox label="Select" name="cb1" disabled={false} checked={false}></bds-checkbox>
  </>
);

export const disabledCheckBox = () => (
  <>
    <bds-checkbox id="check1" label="Selected" checked disabled></bds-checkbox>
    <bds-checkbox id="check2" label="Deselected" disabled></bds-checkbox>
  </>
);

export const withoutLabelCheckBox = () => (
  <>
    <bds-checkbox id="check1" checked></bds-checkbox>
    <bds-checkbox id="check2"></bds-checkbox>
    <bds-checkbox id="check1" checked disabled></bds-checkbox>
    <bds-checkbox id="check2" disabled></bds-checkbox>
  </>
);
