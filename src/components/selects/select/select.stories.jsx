import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Select',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const margin = {
  marginLeft: '8px',
};

export const defaultSelect = () => (
  <bds-select>
    <bds-select-option value="1">Millie Bobby</bds-select-option>
    <bds-select-option value="2">Finn Wolfhard</bds-select-option>
    <bds-select-option value="3">David Harbour</bds-select-option>
    <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
    <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
    <bds-select-option value="6">Noah Schnapp</bds-select-option>
  </bds-select>
);

export const iconSelect = () => (
  <>
    <bds-select icon="favorite">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
    <br />
    <bds-select disabled icon="favorite">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </>
);

export const selectedSelect = () => (
  <>
    <bds-select value="2">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
    <br />
    <bds-select disabled value="2">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </>
);

export const disabledSelect = () => (
  <>
    <bds-select disabled>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
    <br />
    <bds-select icon="favorite" disabled>
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </>
);

export const selectWithIconOnSlot = () => (
  <bds-select>
    <bds-select-option value="1" slot-align="flex-start">
      <div slot="input-left">
        <bds-icon name="eye-open" size="small" color="#F66689"></bds-icon>
      </div>
      <div style={margin}>
        <bds-typo variant="fs-12">Pode visualizar</bds-typo>
        <bds-typo variant="fs-10">Apenas visualiza informações do contrato.</bds-typo>
      </div>
    </bds-select-option>
    <bds-select-option value="2" slot-align="flex-start">
      <div slot="input-left">
        <bds-icon name="edit" size="small" color="#F9B42F"></bds-icon>
      </div>
      <div style={margin}>
        <bds-typo variant="fs-12">Pode editar</bds-typo>
        <bds-typo variant="fs-10">Cria e edita chatbots, mas não gerencia os membros do contrato.</bds-typo>
      </div>
    </bds-select-option>
    <bds-select-option value="3" slot-align="flex-start">
      <div slot="input-left">
        <bds-icon name="avatar-user" size="small" color="#2CC3D5"></bds-icon>
      </div>
      <div style={margin}>
        <bds-typo variant="fs-12">Admin</bds-typo>
        <bds-typo variant="fs-10">Edita todos os dados do contrato, gerencia membros, cria e edita chatbots.</bds-typo>
      </div>
    </bds-select-option>
  </bds-select>
);
