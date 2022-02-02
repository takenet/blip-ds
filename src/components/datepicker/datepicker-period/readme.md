# bds-datepicker



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute | Description                                                  | Type       | Default                           |
| ----------------- | --------- | ------------------------------------------------------------ | ---------- | --------------------------------- |
| `endDate`         | --        | EndDate. Insert a limiter to select the date period.         | `DaysList` | `dateToDayList(defaultEndDate)`   |
| `endDateSelect`   | --        | EndDateSelect. Insert a limiter to select the date period.   | `Date`     | `null`                            |
| `startDate`       | --        | StartDate. Insert a limiter to select the date period.       | `DaysList` | `dateToDayList(defaultStartDate)` |
| `startDateSelect` | --        | StartDateSelect. Insert a limiter to select the date period. | `Date`     | `null`                            |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `bdsEndDate`   |             | `CustomEvent<any>` |
| `bdsStartDate` |             | `CustomEvent<any>` |


## Methods

### `clear() => Promise<void>`

Return the validity of the input.

#### Returns

Type: `Promise<void>`




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
