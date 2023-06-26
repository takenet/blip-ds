# bds-test-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [bds-grid](../grid)
- [bds-modal](../modal)
- [bds-illustration](../illustration)
- [bds-typo](../typo)
- [bds-autocomplete](../autocomplete)
- [bds-select-option](../select-option)
- [bds-modal-action](../modal/modal-action)
- [bds-button](../button)
- [bds-theme-provider](../theme-provider)
- [bds-paper](../paper)
- [bds-chip-tag](../chip-tag)
- [bds-chip-selected](../chip-selected)
- [bds-chip-clickable](../chip-clickable)
- [bds-stepper](../stepper)
- [bds-step](../stepper/step)
- [bds-badge](../badge)
- [bds-switch](../bds-switch)
- [bds-button-icon](../icon-button)
- [bds-progress-bar](../progress-bar)
- [bds-input](../input)
- [bds-input-password](../input-password)
- [bds-input-phone-number](../input-phone-number)
- [bds-select](../selects/select)
- [bds-input-chips](../input-chips)
- [bds-input-editable](../input-editable)
- [bds-datepicker](../datepicker)
- [bds-loading-bar](../loading-bar)
- [bds-loading-spinner](../loading-spinner)
- [bds-radio-group](../radio-group)
- [bds-radio](../radio)
- [bds-dropdown](../dropdown)
- [bds-list](../list)
- [bds-list-item](../list)
- [bds-upload](../upload)
- [bds-banner](../banner)
- [bds-banner-link](../banner/banner-link)
- [bds-alert](../alert)
- [bds-alert-header](../alert/alert-header)
- [bds-alert-body](../alert/alert-body)
- [bds-alert-actions](../alert/alert-actions)
- [bds-avatar-group](../avatar-group)
- [bds-tooltip](../tooltip)
- [bds-avatar](../avatar)

### Graph
```mermaid
graph TD;
  bds-test-component --> bds-grid
  bds-test-component --> bds-modal
  bds-test-component --> bds-illustration
  bds-test-component --> bds-typo
  bds-test-component --> bds-autocomplete
  bds-test-component --> bds-select-option
  bds-test-component --> bds-modal-action
  bds-test-component --> bds-button
  bds-test-component --> bds-theme-provider
  bds-test-component --> bds-paper
  bds-test-component --> bds-chip-tag
  bds-test-component --> bds-chip-selected
  bds-test-component --> bds-chip-clickable
  bds-test-component --> bds-stepper
  bds-test-component --> bds-step
  bds-test-component --> bds-badge
  bds-test-component --> bds-switch
  bds-test-component --> bds-button-icon
  bds-test-component --> bds-progress-bar
  bds-test-component --> bds-input
  bds-test-component --> bds-input-password
  bds-test-component --> bds-input-phone-number
  bds-test-component --> bds-select
  bds-test-component --> bds-input-chips
  bds-test-component --> bds-input-editable
  bds-test-component --> bds-datepicker
  bds-test-component --> bds-loading-bar
  bds-test-component --> bds-loading-spinner
  bds-test-component --> bds-radio-group
  bds-test-component --> bds-radio
  bds-test-component --> bds-dropdown
  bds-test-component --> bds-list
  bds-test-component --> bds-list-item
  bds-test-component --> bds-upload
  bds-test-component --> bds-banner
  bds-test-component --> bds-banner-link
  bds-test-component --> bds-alert
  bds-test-component --> bds-alert-header
  bds-test-component --> bds-alert-body
  bds-test-component --> bds-alert-actions
  bds-test-component --> bds-avatar-group
  bds-test-component --> bds-tooltip
  bds-test-component --> bds-avatar
  bds-modal --> bds-icon
  bds-autocomplete --> bds-icon
  bds-autocomplete --> bds-typo
  bds-autocomplete --> bds-select-option
  bds-select-option --> bds-typo
  bds-button --> bds-icon
  bds-button --> bds-typo
  bds-button --> bds-loading-spinner
  bds-chip-tag --> bds-icon
  bds-chip-tag --> bds-typo
  bds-chip-selected --> bds-icon
  bds-chip-selected --> bds-typo
  bds-chip-clickable --> bds-icon
  bds-chip-clickable --> bds-avatar
  bds-chip-clickable --> bds-typo
  bds-avatar --> bds-typo
  bds-avatar --> bds-icon
  bds-step --> bds-icon
  bds-step --> bds-typo
  bds-badge --> bds-icon
  bds-badge --> bds-typo
  bds-button-icon --> bds-icon
  bds-progress-bar --> bds-typo
  bds-input --> bds-icon
  bds-input --> bds-typo
  bds-input --> bds-counter-text
  bds-counter-text --> bds-typo
  bds-input-password --> bds-icon
  bds-input-password --> bds-typo
  bds-input-phone-number --> bds-icon
  bds-input-phone-number --> bds-typo
  bds-input-phone-number --> bds-select-option
  bds-select --> bds-icon
  bds-select --> bds-typo
  bds-select --> bds-select-option
  bds-input-chips --> bds-chip-clickable
  bds-input-chips --> bds-tooltip
  bds-input-chips --> bds-icon
  bds-input-chips --> bds-typo
  bds-tooltip --> bds-typo
  bds-input-editable --> bds-icon
  bds-input-editable --> bds-typo
  bds-datepicker --> bds-input
  bds-datepicker --> bds-icon
  bds-datepicker --> bds-typo
  bds-datepicker --> bds-datepicker-single
  bds-datepicker --> bds-datepicker-period
  bds-datepicker --> bds-button
  bds-datepicker-single --> bds-typo
  bds-datepicker-single --> bds-icon
  bds-datepicker-single --> bds-select-option
  bds-datepicker-period --> bds-typo
  bds-datepicker-period --> bds-icon
  bds-datepicker-period --> bds-select-option
  bds-radio --> bds-typo
  bds-list --> bds-list-item
  bds-list-item --> bds-chip-clickable
  bds-list-item --> bds-tooltip
  bds-list-item --> bds-button-icon
  bds-list-item --> bds-radio
  bds-list-item --> bds-checkbox
  bds-list-item --> bds-avatar
  bds-list-item --> bds-icon
  bds-list-item --> bds-typo
  bds-list-item --> bds-switch
  bds-checkbox --> bds-icon
  bds-checkbox --> bds-typo
  bds-upload --> bds-icon
  bds-upload --> bds-typo
  bds-upload --> bds-banner
  bds-upload --> bds-button-icon
  bds-banner --> bds-icon
  bds-banner --> bds-button-icon
  bds-alert-header --> bds-icon
  bds-alert-header --> bds-typo
  bds-alert-body --> bds-typo
  bds-avatar-group --> bds-avatar
  style bds-test-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
