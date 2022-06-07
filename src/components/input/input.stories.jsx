import React from 'react';

import readme from './readme.md';

export default {
  title: 'Input',
  parameters: {
    notes: { markdown: readme },
  },
};

const inputStyle = {
  width: '312px',
};

export const defaultInput = () => (
  <div style={inputStyle}>
    <bds-input
      placeholder="nome completo"
      label=""
      disabled={false}
      danger={false}
      icon=""
      value=""
      type=""
      error-message=""
      helper-message=""
      min={null}
      minlength={null}
      max={null}
      maxlength={null}
      readonly={false}
    ></bds-input>
  </div>
);

export const dangerInput = () => (
  <div style={inputStyle}>
    <bds-input danger></bds-input>
    <br />
    <bds-input danger icon="email"></bds-input>
    <br />
    <bds-input danger label="Name"></bds-input>
    <br />
    <bds-input danger icon="email" label="Name"></bds-input>
  </div>
);

export const disabledInput = () => (
  <div style={inputStyle}>
    <bds-input disabled></bds-input>
    <br />
    <bds-input disabled value="Action descripition"></bds-input>
    <br />
    <bds-input disabled icon="email" value="Action descripition"></bds-input>
    <br />
    <bds-input disabled label="Action" value="Action descripition"></bds-input>
    <br />
    <bds-input disabled icon="email" label="Action" value="Action descripition"></bds-input>
  </div>
);

export const counterInput = () => (
  <div style={inputStyle}>
    <bds-input maxlength={30} counter-length></bds-input>
    <br />
    <bds-input maxlength={30} counter-length icon="email"></bds-input>
    <br />
    <bds-input maxlength={30} counter-length label="Name"></bds-input>
    <br />
    <bds-input maxlength={30} counter-length icon="email" label="Name"></bds-input>
  </div>
);

export const inputTextarea = () => (
  <div style={inputStyle}>
    <bds-input is-textarea rows="2"></bds-input>
    <br />
    <bds-input is-textarea rows="2" icon="email"></bds-input>
    <br />
    <bds-input is-textarea rows="2" danger></bds-input>
    <br />
    <bds-input is-textarea rows="2" disabled></bds-input>
    <br />
    <bds-input is-textarea rows="4"></bds-input>
  </div>
);
