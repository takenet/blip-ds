import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Input Chips',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const inputChipsDefault = () => {
  const sizes = select('size', ['standard', 'tall']);
  const label = text('label', '');
  const danger = boolean('danger', false);
  const errorMessage = text('errorMessage', '');

  return (
    <bds-input-chips
      sizes={sizes}
      label={label}
      danger={danger}
      error-message={errorMessage}
      chips='["chip1", "chip2"]'
    ></bds-input-chips>
  );
};

export const inputChipsEmail = () => {
  const danger = boolean('danger', false);
  const errorMessage = text('errorMessage', '');

  return (
    <bds-input-chips type="email" danger={danger} error-message={errorMessage} chips='["chip@email.com", "chip2"]'></bds-input-chips>
  );
};
