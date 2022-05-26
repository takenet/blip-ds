# bds-upload



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute  | Description | Type     | Default     |
| -------------------- | ---------- | ----------- | -------- | ----------- |
| `subtitle`           | `subtitle` |             | `string` | `undefined` |
| `title` _(required)_ | `title`    |             | `string` | `undefined` |


## Events

| Event             | Description | Type                |
| ----------------- | ----------- | ------------------- |
| `uploadCompleted` |             | `CustomEvent<Blob>` |


## Dependencies

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)

### Graph
```mermaid
graph TD;
  bds-upload --> bds-icon
  bds-upload --> bds-typo
  style bds-upload fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
