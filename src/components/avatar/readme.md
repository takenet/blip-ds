# bds-avatar



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                  | Type                                                                                    | Default         |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------- |
| `color`      | `color`       | Color, Entered as one of the color. Can be one of: 'system', 'success', 'warning', 'error', 'info'.          | `"colorLetter" \| "error" \| "info" \| "success" \| "surface" \| "system" \| "warning"` | `'colorLetter'` |
| `dataTest`   | `data-test`   | Data test is the prop to specifically test the component action object.                                      | `string`                                                                                | `null`          |
| `ellipsis`   | `ellipsis`    | Ellipses, serves to indicate the user number in the listing.                                                 | `number`                                                                                | `null`          |
| `name`       | `name`        | Name, Inserted for highlighted osuary name. Enter the full name.                                             | `string`                                                                                | `null`          |
| `openUpload` | `open-upload` | When set to true, allows the avatar to be clicked to select and upload an image.                             | `boolean`                                                                               | `false`         |
| `size`       | `size`        | Size, Entered as one of the size. Can be one of: 'extra-small', 'small', 'standard', 'large', 'extra-large'. | `"extra-large" \| "extra-small" \| "large" \| "micro" \| "small" \| "standard"`         | `'standard'`    |
| `thumbnail`  | `thumbnail`   | Thumbnail, Inserted to highlight user image. Url field.                                                      | `string`                                                                                | `null`          |
| `upload`     | `upload`      | Upload, Serve to enable upload function on avatar.                                                           | `boolean`                                                                               | `false`         |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `bdsClickAvatar` |             | `CustomEvent<any>` |
| `bdsImageUpload` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [bds-accordion-header](../accordion)
 - [bds-avatar-group](../avatar-group)
 - [bds-chip-clickable](../chip-clickable)
 - [bds-data-table](../table)
 - [bds-list-item](../list)
 - [bds-menu-exibition](../menu/menu-exibition)

### Depends on

- [bds-typo](../typo)
- [bds-icon](../icon)

### Graph
```mermaid
graph TD;
  bds-avatar --> bds-typo
  bds-avatar --> bds-icon
  bds-accordion-header --> bds-avatar
  bds-avatar-group --> bds-avatar
  bds-chip-clickable --> bds-avatar
  bds-data-table --> bds-avatar
  bds-list-item --> bds-avatar
  bds-menu-exibition --> bds-avatar
  style bds-avatar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
