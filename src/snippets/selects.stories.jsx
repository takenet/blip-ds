import React from 'react';

export default {
  title: 'Snippets/Selects',
};

export const BasicSelect = () => {
  return (
    <bds-select placeholder="nome completo">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  );
};

export const SelectDescription = () => {
  return (
    <bds-select placeholder="nome completo">
      <bds-select-option title-text="Millie Bobby" value="1">
        Clique aqui para selecionar Millie Bobby
      </bds-select-option>
      <bds-select-option title-text="Finn Wolfhard" value="2">
        Clique aqui para selecionar Finn Wolfhard
      </bds-select-option>
      <bds-select-option title-text="David Harbour" value="3">
        Clique aqui para selecionar David Harbour
      </bds-select-option>
      <bds-select-option title-text="Gaten Matarazzo" value="4">
        Clique aqui para selecionar Gaten Matarazzo
      </bds-select-option>
      <bds-select-option title-text="Caleb McLaughlin" value="5">
        Clique aqui para selecionar Caleb McLaughlin
      </bds-select-option>
      <bds-select-option title-text="Noah Schnapp" value="6">
        Clique aqui para selecionar Noah Schnapp
      </bds-select-option>
    </bds-select>
  );
};

export const SelectWithIcon = () => {
  return (
    <bds-select placeholder="nome completo">
      <bds-select-option value="1">
        <bds-icon slot="input-left" theme="outline" name="blip-ideas" size="xxx-small"></bds-icon>
        Millie Bobby
      </bds-select-option>
      <bds-select-option value="2">
        <bds-icon slot="input-left" theme="outline" name="camera" size="xxx-small"></bds-icon>
        Finn Wolfhard
      </bds-select-option>
      <bds-select-option value="3">
        <bds-icon slot="input-left" theme="outline" name="cart-shop" size="xxx-small"></bds-icon>
        David Harbour
      </bds-select-option>
      <bds-select-option value="4">
        <bds-icon slot="input-left" theme="outline" name="builder-test-bot" size="xxx-small"></bds-icon>
        Gaten Matarazzo
      </bds-select-option>
      <bds-select-option value="5">
        <bds-icon slot="input-left" theme="outline" name="audio" size="xxx-small"></bds-icon>
        Caleb McLaughlin
      </bds-select-option>
      <bds-select-option value="6">
        <bds-icon slot="input-left" theme="outline" name="eye-open" size="xxx-small"></bds-icon>
        Noah Schnapp
      </bds-select-option>
    </bds-select>
  );
};

export const SelectStatus = () => {
  return (
    <bds-select placeholder="nome completo">
      <bds-select-option value="1" status="online">
        Millie Bobby
      </bds-select-option>
      <bds-select-option value="2" status="online">
        Finn Wolfhard
      </bds-select-option>
      <bds-select-option value="3" status="offline">
        David Harbour
      </bds-select-option>
      <bds-select-option value="4" status="online">
        Gaten Matarazzo
      </bds-select-option>
      <bds-select-option value="5" status="offline">
        Caleb McLaughlin
      </bds-select-option>
      <bds-select-option value="6" status="offline">
        Noah Schnapp
      </bds-select-option>
    </bds-select>
  );
};

export const CompleteSelectOption = () => {
  return (
    <bds-select placeholder="nome completo">
      <bds-select-option title-text="Millie Bobby" value="1" status="online">
        <bds-icon slot="input-left" theme="outline" name="blip-ideas" size="medium"></bds-icon>
        Clique aqui para selecionar Millie Bobby
      </bds-select-option>
      <bds-select-option title-text="Finn Wolfhard" value="2" status="online">
        <bds-icon slot="input-left" theme="outline" name="camera" size="medium"></bds-icon>
        Clique aqui para selecionar Finn Wolfhard
      </bds-select-option>
      <bds-select-option title-text="David Harbour" value="3" status="offline">
        <bds-icon slot="input-left" theme="outline" name="cart-shop" size="medium"></bds-icon>
        Clique aqui para selecionar David Harbour
      </bds-select-option>
      <bds-select-option title-text="Gaten Matarazzo" value="4" status="online">
        <bds-icon slot="input-left" theme="outline" name="builder-test-bot" size="medium"></bds-icon>
        Clique aqui para selecionar Gaten Matarazzo
      </bds-select-option>
      <bds-select-option title-text="Caleb McLaughlin" value="5" status="offline">
        <bds-icon slot="input-left" theme="outline" name="audio" size="medium"></bds-icon>
        Clique aqui para selecionar Caleb McLaughlin
      </bds-select-option>
      <bds-select-option title-text="Noah Schnapp" value="6" status="offline">
        <bds-icon slot="input-left" theme="outline" name="eye-open" size="medium"></bds-icon>
        Clique aqui para selecionar Noah Schnapp
      </bds-select-option>
    </bds-select>
  );
};
