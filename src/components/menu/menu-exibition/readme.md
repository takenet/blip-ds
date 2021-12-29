# bds-menu-avatar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                                     | Default      |
| ----------------- | ------------------ | ----------- | ---------------------------------------- | ------------ |
| `avatarName`      | `avatar-name`      | description | `string`                                 | `null`       |
| `avatarSize`      | `avatar-size`      | description | `"extra-small" \| "small" \| "standard"` | `'standard'` |
| `avatarThumbnail` | `avatar-thumbnail` | description | `string`                                 | `null`       |
| `subtitle`        | `subtitle`         | description | `string`                                 | `null`       |
| `value`           | `value`            | description | `string`                                 | `null`       |


## Dependencies

### Depends on

- [bds-avatar](../../avatar)
- [bds-typo](../../typo)

### Graph
```mermaid
graph TD;
  bds-menu-exibition --> bds-avatar
  bds-menu-exibition --> bds-typo
  bds-avatar --> bds-typo
  bds-avatar --> bds-icon
  style bds-menu-exibition fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
