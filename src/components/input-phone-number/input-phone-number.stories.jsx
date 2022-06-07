import React from 'react';
import readme from './readme.md';

export default {
  title: 'Input Phone Number',
  parameters: {
    notes: { markdown: readme },
  },
};

const inputStyle = {
  width: '400px',
};

export const defaultInput = () => (
  <div style={inputStyle}>
    <bds-input-phone-number label="Phone number"></bds-input-phone-number>
  </div>
);

export const dangerInput = () => (
  <div style={inputStyle}>
    <bds-input-phone-number danger label="Phone number"></bds-input-phone-number>
  </div>
);

export const validationsInput = () => (
  <div style={inputStyle}>
    <bds-input-phone-number
      required
      required-error-message="This input is required."
      number-error-message="Only numbers are allowed."
    ></bds-input-phone-number>
  </div>
);
