# bds-table



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                   | Type      | Default     |
| --------- | --------- | ------------------------------------------------------------- | --------- | ----------- |
| `avatar`  | `avatar`  | Prop to activate the possibility of use avatar in any column. | `boolean` | `false`     |
| `column`  | `column`  | Prop to recive the header and configuration of table.         | `string`  | `undefined` |
| `options` | `options` | Prop to recive the content of the table.                      | `string`  | `undefined` |
| `sorting` | `sorting` | Prop to activate the sorting.                                 | `boolean` | `false`     |


## Dependencies

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)
- [bds-avatar](../avatar)

### Graph
```mermaid
graph TD;
  bds-table --> bds-icon
  bds-table --> bds-typo
  bds-table --> bds-avatar
  bds-avatar --> bds-typo
  bds-avatar --> bds-icon
  style bds-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
