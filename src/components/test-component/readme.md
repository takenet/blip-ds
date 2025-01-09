# bds-test-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [bds-grid](../grid)
- [bds-typo](../typo)
- [bds-theme-provider](../theme-provider)
- [bds-paper](../paper)
- [bds-carousel](../carousel)
- [bds-carousel-item](../carousel)
- [bds-illustration](../illustration)
- [bds-button](../button)

### Graph
```mermaid
graph TD;
  bds-test-component --> bds-grid
  bds-test-component --> bds-typo
  bds-test-component --> bds-theme-provider
  bds-test-component --> bds-paper
  bds-test-component --> bds-carousel
  bds-test-component --> bds-carousel-item
  bds-test-component --> bds-illustration
  bds-test-component --> bds-button
  bds-carousel --> bds-grid
  bds-carousel --> bds-skeleton
  bds-carousel --> bds-button
  bds-skeleton --> bds-grid
  bds-button --> bds-loading-spinner
  bds-button --> bds-icon
  bds-button --> bds-typo
  bds-carousel-item --> bds-theme-provider
  bds-carousel-item --> bds-image
  bds-image --> bds-skeleton
  bds-image --> bds-illustration
  style bds-test-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
