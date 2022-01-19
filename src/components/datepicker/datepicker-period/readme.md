# bds-datepicker



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description                                            | Type       | Default |
| ----------- | --------- | ------------------------------------------------------ | ---------- | ------- |
| `endDate`   | --        | EndDate. Insert a limiter to select the date period.   | `DaysList` | `null`  |
| `startDate` | --        | StartDate. Insert a limiter to select the date period. | `DaysList` | `null`  |


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
