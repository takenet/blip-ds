# bds-datepicker



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                | Type      | Default |
| --------------------- | ----------------------- | ---------------------------------------------------------- | --------- | ------- |
| `dateLimit`           | `date-limit`            | DateLimit. Insert a limiter to select the date period.     | `number`  | `null`  |
| `selectBeforeCurrent` | `select-before-current` | SelectBeforeCurrent. Disable selection before current day. | `boolean` | `false` |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `bdsEndDate`   |             | `CustomEvent<Date>` |
| `bdsStartDate` |             | `CustomEvent<Date>` |


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
  bds-datepicker-period --> bds-typo
  bds-datepicker-period --> bds-icon
  bds-datepicker-period --> bds-select-option
  bds-select-option --> bds-typo
  bds-datepicker --> bds-datepicker-period
  style bds-datepicker-period fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
