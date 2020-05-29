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
  const types = select('type', ['text', 'email']);
  const sizes = select('size', ['standard', 'tall']);
  const label = text('label', '');
  const delimiter = text('delimiter', ',');
  const danger = boolean('danger', false);
  const errorMessage = text('errorMessage', '');

  return (
    <bds-input-chips
      types={types}
      sizes={sizes}
      label={label}
      delimiter={delimiter}
      danger={danger}
      error-message={errorMessage}
    ></bds-input-chips>
  );
};
