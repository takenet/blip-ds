import React from 'react';

import readme from './readme.md';

export default {
  title: 'Input Chips',
  parameters: {
    notes: { markdown: readme },
  },
};

export const inputChipsDefault = () => {
  return (
    <bds-input-chips
      sizes="standard"
      label=""
      danger={false}
      error-message=""
      chips='["chip1", "chip2"]'
      disable-submit={boolean('disableSubmit', false)}
      disabled={boolean('disabled', false)}
    ></bds-input-chips>
  );
};

export const inputChipsEmail = () => {
  return (
    <bds-input-chips type="email" danger={false} error-message="" chips='["chip@email.com", "chip2"]'></bds-input-chips>
  );
};
