# sbp-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                     | Type                                           | Default      |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------ |
| `arrow`    | `arrow`    | The arrow button                                                                                | `boolean`                                      | `false`      |
| `disabled` | `disabled` | If true, the base button will be disabled.                                                      | `boolean`                                      | `false`      |
| `icon`     | `icon`     | The icon name                                                                                   | `string`                                       | `null`       |
| `size`     | `size`     | Size. Entered as one of the size. Can be one of:  'tall', 'standard', 'short';                  | `"short" \| "standard" \| "tall"`              | `'standard'` |
| `variant`  | `variant`  | Variant. Entered as one of the variant. Can be one of:  'primary', 'second', 'ghost', 'dashed'; | `"dashed" \| "ghost" \| "primary" \| "second"` | `'primary'`  |


## Events

| Event   | Description                           | Type               |
| ------- | ------------------------------------- | ------------------ |
| `click` | Set the handler to handle click event | `CustomEvent<any>` |


## Dependencies

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)

### Graph
```mermaid
graph TD;
  bds-button --> bds-icon
  bds-button --> bds-typo
  style bds-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
