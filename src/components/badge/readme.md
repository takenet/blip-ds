# bds-badge



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                 | Type                                                                    | Default     |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| `animation` | `animation` | If true, actived the pulse animation.                                                                       | `boolean`                                                               | `false`     |
| `color`     | `color`     | Set the color of the component.                                                                             | `string`                                                                | `'system'`  |
| `dataTest`  | `data-test` | Data test is the prop to specifically test the component action object.                                     | `string`                                                                | `null`      |
| `icon`      | `icon`      | Set witch icon will be render inside the component.                                                         | `string`                                                                | `null`      |
| `number`    | `number`    | Set the text in shape circle. Is just alow numbers, but if the number pass 999 a symbol '+' will be render. | `number`                                                                | `undefined` |
| `shape`     | `shape`     | Set the shape of the component.                                                                             | `"circle" \| "polygon" \| "square" \| "triangle" \| "triangle-reverse"` | `'circle'`  |


## Dependencies

### Used by

 - [bds-tab-group](../tabs)

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)

### Graph
```mermaid
graph TD;
  bds-badge --> bds-icon
  bds-badge --> bds-typo
  bds-tab-group --> bds-badge
  style bds-badge fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
