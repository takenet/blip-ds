# bds-input-editable



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                                                                                                                                                      | Type      | Default     |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `danger`                | `danger`                  | Add state danger on input, use for use feedback. If true avoid save confirmation.                                                                                                | `boolean` | `false`     |
| `errorMessage`          | `error-message`           | Indicated to pass an feeback to user.                                                                                                                                            | `string`  | `''`        |
| `inputName`             | `input-name`              | Input Name                                                                                                                                                                       | `string`  | `''`        |
| `maxlength`             | `maxlength`               | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. | `number`  | `undefined` |
| `minlength`             | `minlength`               | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter. | `number`  | `0`         |
| `minlengthErrorMessage` | `minlength-error-message` | Error message when the value is lower than the minlength                                                                                                                         | `string`  | `undefined` |
| `requiredErrorMessage`  | `required-error-message`  | Error message when input is required                                                                                                                                             | `string`  | `undefined` |
| `value`                 | `value`                   | The value of the input.                                                                                                                                                          | `string`  | `''`        |


## Events

| Event                  | Description                      | Type                                    |
| ---------------------- | -------------------------------- | --------------------------------------- |
| `bdsInputEditableSave` | Emitted when input text confirm. | `CustomEvent<InputEditableEventDetail>` |


## Shadow Parts

| Part                              | Description |
| --------------------------------- | ----------- |
| `"input__editable--static__typo"` |             |


## Dependencies

### Depends on

- [bds-typo](../typo)
- [bds-icon](../icon)
- [bds-input](../input)

### Graph
```mermaid
graph TD;
  bds-input-editable --> bds-typo
  bds-input-editable --> bds-icon
  bds-input-editable --> bds-input
  bds-input --> bds-icon
  bds-input --> bds-typo
  bds-input --> bds-counter-text
  bds-counter-text --> bds-typo
  style bds-input-editable fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
