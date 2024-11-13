import React from 'react';

export default {
  title: 'Snippets/Form',
};

export const BasicForm = (args) => {
  return (
    <form>
      <bds-paper width="500px">
        <bds-grid padding="3" direction="column" gap="1">
          <bds-typo variant="fs-24" bold="bold">
            Entrar
          </bds-typo>
          <bds-input label="E-mail"></bds-input>
          <bds-input label="Senha"></bds-input>
          <bds-checkbox label="Esqueci minha senha"></bds-checkbox>
          <bds-grid justify-content="flex-end" padding="t-2">
            <bds-button>Cadastrar</bds-button>
          </bds-grid>
        </bds-grid>
      </bds-paper>
    </form>
  );
};

export const ComplexForm = (args) => {
  return (
    <form>
      <bds-grid padding="3" direction="column" gap="2">
        <bds-typo variant="fs-24" bold="bold">
          Overview
        </bds-typo>
        <bds-checkbox label="checkbox label 1"></bds-checkbox>
        <bds-checkbox label="checkbox label 2"></bds-checkbox>
        <bds-checkbox label="checkbox label 3"></bds-checkbox>
        <bds-input label="input"></bds-input>
        <bds-input-phone-number label="Phone Number" value="" />
        <bds-upload language="pt_BR" subtitle="Description uploades, only one file" title-name="Title uploader" />
        <bds-radio-group>
          <bds-grid direction="column" gap="2">
            <bds-typo bold="bold">Radio group</bds-typo>
            <bds-radio label="Radio 1" value="radio1" />
            <bds-radio label="Radio 2" value="radio2" />
          </bds-grid>
        </bds-radio-group>
        <bds-select placeholder="nome completo">
          <bds-select-option value="1">Millie Bobby</bds-select-option>
          <bds-select-option value="2">Finn Wolfhard</bds-select-option>
          <bds-select-option value="3">David Harbour</bds-select-option>
          <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
          <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
          <bds-select-option value="6">Noah Schnapp</bds-select-option>
        </bds-select>
        <bds-input rows="4" is-textarea label="input textarea"></bds-input>
        <bds-grid justify-content="flex-end" padding="t-2">
          <bds-button type="submit">Enviar</bds-button>
        </bds-grid>
      </bds-grid>
    </form>
  );
};
