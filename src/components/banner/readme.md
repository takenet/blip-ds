# bds-banner



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                 | Type      | Default     |
| ------------ | ------------ | ------------------------------------------------------------------------------------------- | --------- | ----------- |
| `background` | `background` | Specifies the background color to use. The default background color is $color-primary-main. | `string`  | `undefined` |
| `fixed`      | `fixed`      |                                                                                             | `boolean` | `false`     |


## Events

| Event            | Description                         | Type               |
| ---------------- | ----------------------------------- | ------------------ |
| `bdsBannerClick` | Emitted when the X icon is clicked. | `CustomEvent<any>` |


## Methods

### `toggle() => Promise<void>`

Pulbic method to close the banner

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bds-icon](../icon)

### Graph
```mermaid
graph TD;
  bds-banner --> bds-icon
  style bds-banner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
