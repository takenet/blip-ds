# bds-datepicker



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                 | Type                   | Default            |
| ---------------- | ------------------ | ----------------------------------------------------------- | ---------------------- | ------------------ |
| `endDateLimit`   | `end-date-limit`   | EndDateLimit. Insert a limiter to select the date period.   | `string`               | `defaultEndDate`   |
| `message`        | `message`          | Message. Select type of date.                               | `string`               | `null`             |
| `startDateLimit` | `start-date-limit` | StartDateLimit. Insert a limiter to select the date period. | `string`               | `defaultStartDate` |
| `typeOfDate`     | `type-of-date`     | TypeOfDate. Select type of date.                            | `"period" \| "single"` | `'single'`         |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `bdsEndDate`   |             | `CustomEvent<any>` |
| `bdsStartDate` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [bds-input](../input)
- [bds-icon](../icon)
- [bds-typo](../typo)
- [bds-datepicker-single](datepicker-single)
- [bds-datepicker-period](datepicker-period)
- [bds-button](../button)

### Graph
```mermaid
graph TD;
  bds-datepicker --> bds-input
  bds-datepicker --> bds-icon
  bds-datepicker --> bds-typo
  bds-datepicker --> bds-datepicker-single
  bds-datepicker --> bds-datepicker-period
  bds-datepicker --> bds-button
  bds-input --> bds-icon
  bds-input --> bds-typo
  bds-input --> bds-counter-text
  bds-counter-text --> bds-typo
  bds-datepicker-single --> bds-typo
  bds-datepicker-single --> bds-icon
  bds-datepicker-single --> bds-select-option
  bds-select-option --> bds-typo
  bds-datepicker-period --> bds-typo
  bds-datepicker-period --> bds-icon
  bds-datepicker-period --> bds-select-option
  bds-button --> bds-icon
  bds-button --> bds-typo
  bds-button --> bds-loading-spinner
  style bds-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
