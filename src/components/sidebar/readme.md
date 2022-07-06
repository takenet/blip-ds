# bds-sidebar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                         | Type                | Default  |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------- | ------------------- | -------- |
| `isOpen`          | `is-open`          | ; isOpen. Used to open sidebar.                                                     | `boolean`           | `false`  |
| `sidebarPosition` | `sidebar-position` | sidebar position. Used to position the sidebar. Either on the left or on the right. | `"left" \| "right"` | `'left'` |


## Methods

### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bds-button-icon](../icon-button)

### Graph
```mermaid
graph TD;
  bds-sidebar --> bds-button-icon
  bds-button-icon --> bds-icon
  style bds-sidebar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
