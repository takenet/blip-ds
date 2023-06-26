# bds-tooltip



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                             | Type                                                                                                                                                                                                 | Default         |
| ------------- | -------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `dataTest`    | `data-test`    | Data test is the prop to specifically test the component action object. | `string`                                                                                                                                                                                             | `null`          |
| `disabled`    | `disabled`     | Used to disable tooltip when the button are avalible                    | `boolean`                                                                                                                                                                                            | `false`         |
| `position`    | `position`     | Used to set tooltip position                                            | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "left-bottom" \| "left-center" \| "left-top" \| "right-bottom" \| "right-center" \| "right-top" \| "top-center" \| "top-left" \| "top-right"` | `'left-center'` |
| `tooltipText` | `tooltip-text` | Used to set tooltip text                                                | `string`                                                                                                                                                                                             | `'Tooltip'`     |


## Methods

### `visible() => Promise<void>`

Method for change the visibility of tooltip.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [bds-input-chips](../input-chips)
 - [bds-list-item](../list)
 - [bds-select-chips](../selects/select-chips)
 - [bds-test-component](../test-component)

### Depends on

- [bds-typo](../typo)

### Graph
```mermaid
graph TD;
  bds-tooltip --> bds-typo
  bds-input-chips --> bds-tooltip
  bds-list-item --> bds-tooltip
  bds-select-chips --> bds-tooltip
  bds-test-component --> bds-tooltip
  style bds-tooltip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
