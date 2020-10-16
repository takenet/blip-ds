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

export const selectOptionWithIconOnSlot = () => (
  <bds-select-option value="1" slot-align="flex-start">
    <div slot="input-left">
      <bds-icon name="true" size="small"></bds-icon>
    </div>
    <div>
      <bds-typo variant="fs-12">Pode visualizar</bds-typo>
      <bds-typo variant="fs-10">Apenas visualiza informações do contrato.</bds-typo>
    </div>
  </bds-select-option>
);
