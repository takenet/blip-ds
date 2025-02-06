# bds-input-phone-number



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                                                       | Type                            | Default          |
| ---------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------------- |
| `danger`               | `danger`                 | Habilita o estado "danger" no input.                                                                              | `boolean`                       | `false`          |
| `dataTest`             | `data-test`              | Data-test para identificar o componente.                                                                          | `string`                        | `null`           |
| `disabled`             | `disabled`               | Desabilita o input.                                                                                               | `boolean`                       | `false`          |
| `dtSelectFlag`         | `dt-select-flag`         | Data-test para o botão de seleção de bandeira.                                                                    | `string`                        | `null`           |
| `errorMessage`         | `error-message`          | Mensagem de erro a ser exibida.                                                                                   | `string`                        | `''`             |
| `helperMessage`        | `helper-message`         | Mensagem de ajuda para o usuário.                                                                                 | `string`                        | `''`             |
| `icon`                 | `icon`                   | Ícone à esquerda do input.                                                                                        | `string`                        | `''`             |
| `label`                | `label`                  | Label do input.                                                                                                   | `string`                        | `'Phone number'` |
| `language`             | `language`               | Valores possíveis: "pt_BR", "en_US", "es_ES". Se nenhum for informado, utiliza o arquivo padrão (countries.json). | `"en_US" \| "es_ES" \| "pt_BR"` | `'pt_BR'`        |
| `numberErrorMessage`   | `number-error-message`   | Mensagem de erro para validação numérica.                                                                         | `string`                        | `undefined`      |
| `options`              | --                       | Lista de opções do select.                                                                                        | `Option[]`                      | `[]`             |
| `required`             | `required`               | Se `true`, o valor do input será obrigatório.                                                                     | `boolean`                       | `undefined`      |
| `requiredErrorMessage` | `required-error-message` | Mensagem de erro para campo obrigatório.                                                                          | `string`                        | `undefined`      |
| `success`              | `success`                | Habilita o estado "success" no input.                                                                             | `boolean`                       | `false`          |
| `successMessage`       | `success-message`        | Mensagem de sucesso a ser exibida.                                                                                | `string`                        | `''`             |
| `text`                 | `text`                   | Valor do input de telefone.                                                                                       | `string`                        | `''`             |
| `value`                | `value`                  | Valor do select.                                                                                                  | `string`                        | `'+55'`          |


## Events

| Event                  | Description                                      | Type                         |
| ---------------------- | ------------------------------------------------ | ---------------------------- |
| `bdsBlur`              | Evento disparado quando o select perde o foco.   | `CustomEvent<void>`          |
| `bdsCancel`            | Evento disparado quando a seleção é cancelada.   | `CustomEvent<void>`          |
| `bdsFocus`             | Evento disparado quando o select ganha foco.     | `CustomEvent<void>`          |
| `bdsInput`             | Evento disparado quando o input sofre alteração. | `CustomEvent<KeyboardEvent>` |
| `bdsPhoneNumberChange` | Evento disparado quando o valor é alterado.      | `CustomEvent<any>`           |


## Methods

### `changeCountry(code: any, isoCode: any, flag: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `removeFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part                | Description |
| ------------------- | ----------- |
| `"input-container"` |             |
| `"input__message"`  |             |


## Dependencies

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)
- [bds-select-option](../select-option)

### Graph
```mermaid
graph TD;
  bds-input-phone-number --> bds-icon
  bds-input-phone-number --> bds-typo
  bds-input-phone-number --> bds-select-option
  bds-select-option --> bds-typo
  bds-select-option --> bds-checkbox
  bds-checkbox --> bds-icon
  bds-checkbox --> bds-typo
  style bds-input-phone-number fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
