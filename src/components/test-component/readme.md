# bds-test-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [bds-grid](../grid)
- [bds-typo](../typo)
- [bds-theme-provider](../theme-provider)
- [bds-paper](../paper)
- [bds-datepicker](../datepicker)

### Graph
```mermaid
graph TD;
  bds-test-component --> bds-grid
  bds-test-component --> bds-typo
  bds-test-component --> bds-theme-provider
  bds-test-component --> bds-paper
  bds-test-component --> bds-datepicker
  bds-datepicker --> bds-input
  bds-datepicker --> bds-grid
  bds-datepicker --> bds-banner
  bds-datepicker --> bds-datepicker-single
  bds-datepicker --> bds-datepicker-period
  bds-datepicker --> bds-button
  bds-input --> bds-icon
  bds-input --> bds-typo
  bds-input --> bds-counter-text
  bds-counter-text --> bds-typo
  bds-banner --> bds-icon
  bds-banner --> bds-button-icon
  bds-button-icon --> bds-icon
  bds-datepicker-single --> bds-typo
  bds-datepicker-single --> bds-icon
  bds-datepicker-single --> bds-select-option
  bds-select-option --> bds-typo
  bds-select-option --> bds-checkbox
  bds-checkbox --> bds-icon
  bds-checkbox --> bds-typo
  bds-datepicker-period --> bds-typo
  bds-datepicker-period --> bds-icon
  bds-datepicker-period --> bds-select-option
  bds-button --> bds-loading-spinner
  bds-button --> bds-icon
  bds-button --> bds-typo
  style bds-test-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
