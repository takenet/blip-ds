# bds-datepicker



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute         | Description                                                                                                             | Type                            | Default                           |
| ----------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------- |
| `dtButtonNext`    | `dt-button-next`  | Data test is the prop to specifically test the component action object. dtButtonNext is the data-test to button next.   | `string`                        | `null`                            |
| `dtButtonPrev`    | `dt-button-prev`  | Data test is the prop to specifically test the component action object. dtButtonPrev is the data-test to button prev.   | `string`                        | `null`                            |
| `dtSelectMonth`   | `dt-select-month` | Data test is the prop to specifically test the component action object. dtSelectMonth is the data-test to select month. | `string`                        | `null`                            |
| `dtSelectYear`    | `dt-select-year`  | Data test is the prop to specifically test the component action object. dtSelectYear is the data-test to select year.   | `string`                        | `null`                            |
| `endDate`         | --                | EndDate. Insert a limiter to select the date period.                                                                    | `DaysList`                      | `dateToDayList(defaultEndDate)`   |
| `endDateSelect`   | --                | EndDateSelect. Insert a limiter to select the date period.                                                              | `Date`                          | `null`                            |
| `language`        | `language`        | Language, Entered as one of the languages. Can be one of: 'pt_BR', 'es_ES', 'en_US'.                                    | `"en_US" \| "es_ES" \| "pt_BR"` | `'pt_BR'`                         |
| `startDate`       | --                | StartDate. Insert a limiter to select the date period.                                                                  | `DaysList`                      | `dateToDayList(defaultStartDate)` |
| `startDateSelect` | --                | StartDateSelect. Insert a limiter to select the date period.                                                            | `Date`                          | `null`                            |
| `stateSelect`     | `state-select`    | EndDateSelect. Insert a limiter to select the date period.                                                              | `"end" \| "start"`              | `'start'`                         |


## Events

| Event          | Description                                          | Type               |
| -------------- | ---------------------------------------------------- | ------------------ |
| `bdsEndDate`   | bdsEndDate. Event to return selected end date value. | `CustomEvent<any>` |
| `bdsStartDate` | bdsStartDate. Event to return selected date value.   | `CustomEvent<any>` |


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
  bds-select-option --> bds-grid
  bds-select-option --> bds-loading-spinner
  bds-select-option --> bds-typo
  bds-datepicker --> bds-datepicker-period
  style bds-datepicker-period fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
