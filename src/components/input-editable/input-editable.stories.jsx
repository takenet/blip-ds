import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Input Editable',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultInputEditable = () => (
  <div>
    <bds-input-editable
      input-name={text('input name', '')}
      value={text('value', 'Storybook')}
      minlength={number('minlength', '3')}
      minlength-error-message={text('minlength-error-message', 'tamanho menor que o mínimo')}
      required-error-message={text('required-error-message', 'campo não pode ser vazio')}
      maxlength={number('maxlength', null)}
      error-message={text('error-message', '')}
      danger={boolean('danger', false)}
    ></bds-input-editable>
  </div>
);
export const fontExpandInputEditable = () => (
  <div>
    <bds-input-editable
      input-name={text('input name', '')}
      value={text('value', 'Storybook')}
      expand={text('expand', false)}
      size={text('size', 'standard')}
      minlength={number('minlength', '3')}
      minlength-error-message={text('minlength-error-message', 'tamanho menor que o mínimo')}
      required-error-message={text('required-error-message', 'campo não pode ser vazio')}
      maxlength={number('maxlength', null)}
      error-message={text('error-message', '')}
      danger={boolean('danger', false)}>
    </bds-input-editable>
  </div>
);



