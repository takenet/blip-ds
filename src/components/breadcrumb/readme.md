# bds-breadcrumb



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                       | Type                                            | Default |
| --------------------- | ----------------------- | ----------------------------------------------------------------- | ----------------------------------------------- | ------- |
| `editableCurrentPage` | `editable-current-page` | Enable editing of the current page label using bds-input-editable | `boolean`                                       | `false` |
| `items`               | `items`                 |                                                                   | `string \| { label: string; href?: string; }[]` | `[]`    |


## Events

| Event                       | Description                                    | Type                                                  |
| --------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| `bdsCurrentPageLabelChange` | Emitted when the current page label is changed | `CustomEvent<BreadcrumbCurrentPageChangeEventDetail>` |


## Dependencies

### Depends on

- [bds-grid](../grid)
- [bds-dropdown](../dropdown)
- [bds-icon](../icon)
- [bds-button](../button)
- [bds-typo](../typo)
- [bds-input-editable](../input-editable)

### Graph
```mermaid
graph TD;
  bds-breadcrumb --> bds-grid
  bds-breadcrumb --> bds-dropdown
  bds-breadcrumb --> bds-icon
  bds-breadcrumb --> bds-button
  bds-breadcrumb --> bds-typo
  bds-breadcrumb --> bds-input-editable
  bds-button --> bds-loading-spinner
  bds-button --> bds-icon
  bds-button --> bds-typo
  bds-input-editable --> bds-icon
  bds-input-editable --> bds-typo
  style bds-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
