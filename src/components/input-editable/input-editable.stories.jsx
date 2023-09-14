import React from 'react';

import readme from './readme.md';

export default {
  title: 'Components/Input Editable',
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultInputEditable = () => (
  <div>
    <bds-input-editable
      input-name=""
      value="Storybook"
      minlength={3}
      minlength-error-message="tamanho menor que o mínimo"
      required-error-message="campo não pode ser vazio"
      maxlength={null}
      error-message=""
      danger={false}
    ></bds-input-editable>
  </div>
);
export const fontExpandInputEditable = () => (
  <div>
    <bds-input-editable
      input-name=""
      value="Teste de um frase que ocupe um maior espaço"
      expand={true}
      size={'standard'}
      minlength={3}
      minlength-error-message="tamanho menor que o mínimo"
      required-error-message="campo não pode ser vazio"
      maxlength={null}
      error-message=""
      danger={false}
    ></bds-input-editable>
  </div>
);
