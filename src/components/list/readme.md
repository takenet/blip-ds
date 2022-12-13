# bds-list



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                        | Type                                             | Default     |
| ----------------- | ------------------ | ------------------------------------------------------------------ | ------------------------------------------------ | ----------- |
| `avatarName`      | `avatar-name`      | AvatarName. Used to enter the avatar name.                         | `string`                                         | `null`      |
| `avatarThumbnail` | `avatar-thumbnail` | AvatarThumbnail. Used to insert the avatar photo.                  | `string`                                         | `null`      |
| `checked`         | `checked`          |                                                                    | `boolean`                                        | `false`     |
| `icon`            | `icon`             | Icon. Used to add icon in header accordion.                        | `string`                                         | `null`      |
| `secondaryText`   | `secondary-text`   | SecondaryText. Used to insert a secondaryText in the display item. | `string`                                         | `null`      |
| `text`            | `text`             | Text. Used to insert a secondaryText in the display item.          | `string`                                         | `null`      |
| `typeList`        | `type-list`        | AvatarName. Used to enter the avatar name.                         | `"checkbox" \| "default" \| "radio" \| "switch"` | `'default'` |
| `value`           | `value`            | Value. Used to insert a title in the display item.                 | `string`                                         | `null`      |


## Events

| Event       | Description                                                  | Type               |
| ----------- | ------------------------------------------------------------ | ------------------ |
| `bdsChange` | Emitted when the value has changed because of a click event. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [bds-radio](../radio)
- [bds-checkbox](../checkbox)
- [bds-avatar](../avatar)
- [bds-icon](../icon)
- [bds-typo](../typo)
- [bds-switch](../bds-switch)

### Graph
```mermaid
graph TD;
  bds-list-item --> bds-radio
  bds-list-item --> bds-checkbox
  bds-list-item --> bds-avatar
  bds-list-item --> bds-icon
  bds-list-item --> bds-typo
  bds-list-item --> bds-switch
  bds-radio --> bds-typo
  bds-checkbox --> bds-icon
  bds-checkbox --> bds-typo
  bds-avatar --> bds-typo
  bds-avatar --> bds-icon
  style bds-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
