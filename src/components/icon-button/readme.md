# bds-icon-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                       | Type                                                                                  | Default      |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------ |
| `bdsLoading` | `bds-loading` | If true, shows the loading spinner                                                                | `boolean`                                                                             | `false`      |
| `dataTest`   | `data-test`   | Data test is the prop to specifically test the component action object.                           | `string`                                                                              | `null`       |
| `disabled`   | `disabled`    | If true, the base button will be disabled.                                                        | `boolean`                                                                             | `false`      |
| `icon`       | `icon`        | used for add icon in input left. Uses the bds-icon component.                                     | `string`                                                                              | `null`       |
| `size`       | `size`        | Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short';                     | `"short" \| "standard" \| "tall"`                                                     | `'standard'` |
| `variant`    | `variant`     | Variant. Entered as one of the variant. Can be one of: 'primary', 'secondary', 'ghost', 'dashed'; | `"delete" \| "ghost" \| "primary" \| "secondary" \| "secondary--white" \| "tertiary"` | `'primary'`  |


## Dependencies

### Used by

 - [bds-banner](../banner)
 - [bds-list-item](../list)
 - [bds-pagination](../pagination)
 - [bds-sidebar](../sidebar)
 - [bds-table](../table)
 - [bds-tabs](../tabs)
 - [bds-toast](../toast)
 - [bds-upload](../upload)

### Depends on

- [bds-icon](../icon)
- [bds-loading-spinner](../loading-spinner)

### Graph
```mermaid
graph TD;
  bds-button-icon --> bds-icon
  bds-button-icon --> bds-loading-spinner
  bds-banner --> bds-button-icon
  bds-list-item --> bds-button-icon
  bds-pagination --> bds-button-icon
  bds-sidebar --> bds-button-icon
  bds-table --> bds-button-icon
  bds-tabs --> bds-button-icon
  bds-toast --> bds-button-icon
  bds-upload --> bds-button-icon
  style bds-button-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
