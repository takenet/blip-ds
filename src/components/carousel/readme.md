# bds-carousel-item



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                          | Type                                   | Default     |
| ------------------- | --------------------- | -------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `bgColor`           | `bg-color`            |                                                                      | `string`                               | `undefined` |
| `bgImage`           | `bg-image`            |                                                                      | `string`                               | `undefined` |
| `bgImageBrightness` | `bg-image-brightness` |                                                                      | `number`                               | `1`         |
| `theme`             | `theme`               | Set what theme will be aplyed inside the component. 'light', 'dark'; | `"dark" \| "high-contrast" \| "light"` | `'light'`   |


## Dependencies

### Used by

 - [bds-test-component](../test-component)

### Depends on

- [bds-theme-provider](../theme-provider)
- [bds-image](../image)

### Graph
```mermaid
graph TD;
  bds-carousel-item --> bds-theme-provider
  bds-carousel-item --> bds-image
  bds-image --> bds-skeleton
  bds-image --> bds-illustration
  bds-skeleton --> bds-grid
  bds-test-component --> bds-carousel-item
  style bds-carousel-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
