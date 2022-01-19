# bds-datepicker



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                 | Type                   | Default                                                                                                                                                  |
| --------------------- | ----------------------- | ----------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `endDateLimit`        | `end-date-limit`        | EndDateLimit. Insert a limiter to select the date period.   | `string`               | ``${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)     .toString()     .padStart(2, '0')}/${THIS_DAY.getFullYear() + 100}`` |
| `selectBeforeCurrent` | `select-before-current` | SelectBeforeCurrent. Disable selection before current day.  | `boolean`              | `false`                                                                                                                                                  |
| `startDateLimit`      | `start-date-limit`      | StartDateLimit. Insert a limiter to select the date period. | `string`               | ``${THIS_DAY.getDate().toString().padStart(2, '0')}/${(THIS_DAY.getMonth() + 1)     .toString()     .padStart(2, '0')}/${THIS_DAY.getFullYear() - 100}`` |
| `typeOfDate`          | `type-of-date`          | SelectBeforeCurrent. Disable selection before current day.  | `"period" \| "single"` | `'single'`                                                                                                                                               |


## Dependencies

### Depends on

- [bds-datepicker-single](datepicker-single)
- [bds-datepicker-period](datepicker-period)

### Graph
```mermaid
graph TD;
  bds-datepicker --> bds-datepicker-single
  bds-datepicker --> bds-datepicker-period
  bds-datepicker-single --> bds-typo
  bds-datepicker-single --> bds-icon
  bds-datepicker-single --> bds-select-option
  bds-select-option --> bds-typo
  bds-datepicker-period --> bds-typo
  bds-datepicker-period --> bds-icon
  bds-datepicker-period --> bds-select-option
  style bds-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
