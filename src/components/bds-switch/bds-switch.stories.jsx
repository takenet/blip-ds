import React from 'react';
import readme from './readme.md';

export default {
  title: 'Switch',
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultSwitch = () => (
  <>
    <bds-switch name="cb1" disabled={false} checked={true}></bds-switch>
  </>
);

export const withoutLabelSwitch = () => (
  <>
    <bds-switch id="check1" checked></bds-switch>
    <bds-switch id="check2"></bds-switch>
    <bds-switch id="check1" checked disabled></bds-switch>
    <bds-switch id="check2" disabled></bds-switch>
  </>
);

export const disabledSwitch = () => (
  <>
    <bds-switch size="standard" disabled></bds-switch>
    <bds-switch size="standard" checked={true} disabled></bds-switch>
  </>
);

export const sizeSwitch = () => (
  <>
    <bds-switch id="check1" size="short"></bds-switch>
    <p></p>
    <bds-switch id="check2" size="standard"></bds-switch>
    <p></p>
    <bds-switch id="check3" size="tall"></bds-switch>
  </>
);
