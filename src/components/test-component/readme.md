# bds-test-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [bds-grid](../grid)
- [bds-typo](../typo)
- [bds-theme-provider](../theme-provider)
- [bds-paper](../paper)
- [bds-select-chips](../selects/select-chips)
- [bds-select-option](../select-option)

### Graph
```mermaid
graph TD;
  bds-test-component --> bds-grid
  bds-test-component --> bds-typo
  bds-test-component --> bds-theme-provider
  bds-test-component --> bds-paper
  bds-test-component --> bds-select-chips
  bds-test-component --> bds-select-option
  bds-select-chips --> bds-chip-clickable
  bds-select-chips --> bds-tooltip
  bds-select-chips --> bds-icon
  bds-select-chips --> bds-typo
  bds-select-chips --> bds-select-option
  bds-chip-clickable --> bds-icon
  bds-chip-clickable --> bds-avatar
  bds-chip-clickable --> bds-typo
  bds-avatar --> bds-typo
  bds-avatar --> bds-icon
  bds-tooltip --> bds-typo
  bds-select-option --> bds-typo
  bds-select-option --> bds-checkbox
  bds-checkbox --> bds-icon
  bds-checkbox --> bds-typo
  style bds-test-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
