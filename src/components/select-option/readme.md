# bds-select



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute     | Description                                                                      | Type      | Default     |
| -------------------- | ------------- | -------------------------------------------------------------------------------- | --------- | ----------- |
| `bulkOption`         | `bulk-option` | Quantity Description on option value, this item is locate to rigth in component. | `string`  | `''`        |
| `disabled`           | `disabled`    | If `true`, the user cannot interact with the select option.                      | `boolean` | `false`     |
| `label` _(required)_ | `label`       |                                                                                  | `any`     | `undefined` |
| `selected`           | `selected`    | The text value of the option.                                                    | `boolean` | `false`     |
| `value` _(required)_ | `value`       |                                                                                  | `any`     | `undefined` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `optionSelected` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [bds-typo](../typo)

### Graph
```mermaid
graph TD;
  bds-select-option --> bds-typo
  style bds-select-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
