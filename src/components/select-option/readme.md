# bds-select



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute     | Description                                                                      | Type      | Default     |
| -------------------- | ------------- | -------------------------------------------------------------------------------- | --------- | ----------- |
| `bulkOption`         | `bulk-option` | Quantity Description on option value, this item is locate to rigth in component. | `string`  | `''`        |
| `danger`             | `danger`      | Add state danger on input, use for use feedback.                                 | `boolean` | `false`     |
| `disabled`           | `disabled`    | If `true`, the user cannot interact with the select option.                      | `boolean` | `false`     |
| `invisible`          | `invisible`   | Add state danger on input, use for use feedback.                                 | `boolean` | `false`     |
| `selected`           | `selected`    | The text value of the option.                                                    | `boolean` | `false`     |
| `value` _(required)_ | `value`       |                                                                                  | `any`     | `undefined` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `optionSelected` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [bds-input-phone-number](../input-phone-number)
 - [bds-select-chips](../selects/select-chips)

### Depends on

- [bds-typo](../typo)

### Graph
```mermaid
graph TD;
  bds-select-option --> bds-typo
  bds-input-phone-number --> bds-select-option
  bds-select-chips --> bds-select-option
  style bds-select-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
