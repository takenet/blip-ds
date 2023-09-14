import React from 'react';
import readme from './readme.md';

export default {
  title: 'Components/Input Password',
  parameters: {
    notes: { markdown: readme },
  },
};

const inputStyle = {
  width: '312px',
};

export const defaultInputPassword = () => (
  <div style={inputStyle}>
    <bds-input-password
      label=""
      danger={false}
      disabled={false}
      value={'designsystem'}
      error-message=""
      helper-message=""
      min={null}
      minlength={null}
      max={null}
      maxlength={null}
      readonly={false}
    ></bds-input-password>
    <br />
    <bds-input-password
      label="Senha"
      danger={false}
      disabled={false}
      value={'designsystem'}
      error-message=""
      helper-message=""
      min={null}
      minlength={null}
      max={null}
      maxlength={null}
      readonly={false}
    ></bds-input-password>
  </div>
);

export const dangerInputPassword = () => (
  <div style={inputStyle}>
    <bds-input-password value="password" danger error-message="Oops"></bds-input-password>
    <br />
    <bds-input-password value="password" label="Password" danger error-message="Oops"></bds-input-password>
  </div>
);
