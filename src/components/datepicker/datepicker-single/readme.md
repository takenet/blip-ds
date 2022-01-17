# bds-datepicker



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                | Type      | Default |
| --------------------- | ----------------------- | ---------------------------------------------------------- | --------- | ------- |
| `selectBeforeCurrent` | `select-before-current` | SelectBeforeCurrent. Disable selection before current day. | `boolean` | `false` |


## Events

| Event             | Description | Type                   |
| ----------------- | ----------- | ---------------------- |
| `bdsClearDate`    |             | `CustomEvent<boolean>` |
| `bdsDateSelected` |             | `CustomEvent<Date>`    |


## Dependencies

### Used by

 - [bds-datepicker](..)

### Depends on

- [bds-typo](../../typo)
- [bds-icon](../../icon)
- [bds-select-option](../../select-option)

### Graph
```mermaid
graph TD;
  bds-datepicker-single --> bds-typo
  bds-datepicker-single --> bds-icon
  bds-datepicker-single --> bds-select-option
  bds-select-option --> bds-typo
  bds-datepicker --> bds-datepicker-single
  style bds-datepicker-single fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
