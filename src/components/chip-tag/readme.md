# chip-tag



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                       | Type                                                                                   | Default     |
| -------- | --------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------- |
| `color`  | `color`   | used for change the color. Uses one of them.                      | `"danger" \| "default" \| "disabled" \| "info" \| "outline" \| "success" \| "warning"` | `'default'` |
| `icon`   | `icon`    | used for add icon in left container. Uses the bds-icon component. | `string`                                                                               | `undefined` |


## Dependencies

### Used by

 - [bds-table](../table)
 - [bds-test-component](../test-component)

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)

### Graph
```mermaid
graph TD;
  bds-chip-tag --> bds-icon
  bds-chip-tag --> bds-typo
  bds-table --> bds-chip-tag
  bds-test-component --> bds-chip-tag
  style bds-chip-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
