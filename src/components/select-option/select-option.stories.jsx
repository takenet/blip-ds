import React from 'react';
import readme from './readme.md';

export default {
  title: 'Select Option',
  parameters: {
    notes: { markdown: readme },
  },
};

const container = {
  width: '200px',
};

export const defaultSelectOption = () => <bds-select-option value="1">Millie Bobby</bds-select-option>;

export const selectedSelectOption = () => <bds-select-option value="1">Millie Bobby</bds-select-option>;

export const bulkSelectOption = () => (
  <div style={container}>
    <bds-select-option value="2" bulk-option="10">
      Millie Bobby
    </bds-select-option>
  </div>
);

export const selectOptionWithTitle = () => (
  <bds-select-option value="2" slot-align="flex-start" title-text="Membro">
    Cria e edita chatbots, mas não gerencia os membros do contrato.
  </bds-select-option>
);

export const selectOptionWithTitleAndIcon = () => (
  <bds-select-option value="2" slot-align="flex-start" title-text="Membro">
    <bds-icon slot="input-left" name="edit" size="medium" color="#F9B42F"></bds-icon>
    Cria e edita chatbots, mas não gerencia os membros do contrato.
  </bds-select-option>
);
